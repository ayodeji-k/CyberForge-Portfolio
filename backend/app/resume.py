from fastapi import APIRouter, HTTPException, Depends
from pydantic import BaseModel
from typing import List, Dict, Any
from pathlib import Path
import re
from . import auth

router = APIRouter(prefix="/resume", tags=["resume"])
CONTENT_DIR = Path("/home/team/shared/content")

class ResumeAnalysisRequest(BaseModel):
    text: str
    domain: str

class ResumeAnalysisResponse(BaseModel):
    score: int
    missing_keywords: List[str]
    matched_keywords: List[str]
    suggestions: List[Dict[str, Any]]

def get_keywords_for_domain(domain: str) -> List[str]:
    keywords_file = CONTENT_DIR / "resume-tools" / "01-ats-keywords.md"
    if not keywords_file.exists():
        return []
    
    with open(keywords_file, "r") as f:
        content = f.read()
    
    # Simple parsing logic for the domain section
    # Matches "### Domain Name\n```\nkeywords\n```"
    pattern = rf"### {domain.replace('-', ' ').title()}\s*```\s*(.*?)\s*```"
    match = re.search(pattern, content, re.DOTALL | re.IGNORECASE)
    
    if match:
        keywords_str = match.group(1)
        return [k.strip() for k in keywords_str.split(",") if k.strip()]
    
    return []

@router.post("/analyze", response_model=ResumeAnalysisResponse)
async def analyze_resume(request: ResumeAnalysisRequest, current_user: dict = Depends(auth.get_current_user)):
    keywords = get_keywords_for_domain(request.domain)
    if not keywords:
        # Fallback keywords if domain not found or file missing
        keywords = ["cybersecurity", "security", "risk", "compliance"]
    
    resume_text = request.text.lower()
    matched = []
    missing = []
    
    for k in keywords:
        if k.lower() in resume_text:
            matched.append(k)
        else:
            missing.append(k)
            
    # Calculate score (simple percentage of keywords matched)
    score = int((len(matched) / len(keywords)) * 100) if keywords else 0
    
    # Generate suggestions
    suggestions = []
    for m in missing[:5]: # Top 5 missing
        suggestions.append({
            "id": m.lower().replace(" ", "-"),
            "title": f"Missing Keyword: \"{m}\"",
            "points": 5,
            "desc": f"Consider adding '{m}' to your experience or skills section to improve ATS matching for {request.domain} roles."
        })
        
    return ResumeAnalysisResponse(
        score=score,
        missing_keywords=missing,
        matched_keywords=matched,
        suggestions=suggestions
    )
