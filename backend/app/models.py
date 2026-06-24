# Since we are using team-db CLI for Turso sync, we don't use SQLAlchemy models for DB operations.
# These classes can be used for documentation or if we switch to an ORM later.

from pydantic import BaseModel
from typing import Optional
from datetime import datetime

class User(BaseModel):
    id: int
    email: str
    hashed_password: str
    is_premium: bool = False
    created_at: datetime

class Project(BaseModel):
    id: int
    user_id: int
    title: str
    domain: str
    description: Optional[str] = None
    content: Optional[str] = None
    status: str = "draft"
    created_at: datetime

class Resume(BaseModel):
    id: int
    user_id: int
    content: Optional[str] = None
    ats_score: Optional[int] = None
    created_at: datetime
