import os
import re
from fastapi import APIRouter, HTTPException
from typing import List, Dict, Any
from pathlib import Path

router = APIRouter(prefix="/projects", tags=["projects"])

CONTENT_DIR = Path("/home/team/shared/content")

def parse_markdown(file_path: Path) -> str:
    if not file_path.exists():
        return ""
    with open(file_path, "r") as f:
        return f.read()

@router.get("/")
async def get_projects():
    if not CONTENT_DIR.exists():
        return []
    
    domains = []
    # Only iterate through specific domain directories, exclude resume-tools
    exclude = ["resume-tools"]
    
    for domain_dir in sorted(CONTENT_DIR.iterdir()):
        if domain_dir.is_dir() and domain_dir.name not in exclude:
            domain_id = domain_dir.name
            # Basic info from brief if exists
            brief_path = domain_dir / "01-project-brief.md"
            title = domain_id.replace("-", " ").title()
            description = "Build a complete, credible project portfolio in this security domain."
            
            if brief_path.exists():
                content = parse_markdown(brief_path)
                # Try to extract title from # H1
                match = re.search(r"^#\s+(.+)$", content, re.MULTILINE)
                if match:
                    title = match.group(1)
            
            # Simulated status for now
            status = "not-started"
            if domain_id in ["vulnerability-assessment", "network-security", "grc"]:
                status = "completed"
            elif domain_id == "log-analysis":
                status = "in-progress"

            domains.append({
                "id": domain_id,
                "name": title,
                "domain": domain_id.replace("-", " ").title(),
                "description": description,
                "status": status
            })
    
    return domains

@router.get("/{domain}")
async def get_project(domain: str):
    domain_dir = CONTENT_DIR / domain
    if not domain_dir.exists() or not domain_dir.is_dir():
        raise HTTPException(status_code=404, detail="Project domain not found")
    
    brief_path = domain_dir / "01-project-brief.md"
    title = domain.replace("-", " ").title()
    if brief_path.exists():
        content = parse_markdown(brief_path)
        match = re.search(r"^#\s+(.+)$", content, re.MULTILINE)
        if match:
            title = match.group(1)

    return {
        "id": domain,
        "name": title,
        "status": "active"
    }

@router.get("/{domain}/content/{filename}")
async def get_project_content(domain: str, filename: str):
    domain_dir = CONTENT_DIR / domain
    if not domain_dir.exists() or not domain_dir.is_dir():
        raise HTTPException(status_code=404, detail="Project domain not found")
    
    file_path = domain_dir / filename
    if not file_path.exists():
        raise HTTPException(status_code=404, detail="Content file not found")
    
    return {
        "domain": domain,
        "filename": filename,
        "content": parse_markdown(file_path)
    }
