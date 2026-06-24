from fastapi import FastAPI, Depends, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
from fastapi.security import OAuth2PasswordRequestForm
from datetime import timedelta
from typing import List

from . import auth, schemas, database, projects

app = FastAPI(title="CyberForge Portfolio API")

app.include_router(projects.router)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return {"message": "Welcome to CyberForge Portfolio API"}

@app.get("/health")
async def health():
    return {"status": "healthy"}

@app.post("/token", response_model=schemas.Token)
async def login_for_access_token(form_data: OAuth2PasswordRequestForm = Depends()):
    users = database.run_query(f"SELECT * FROM app_users WHERE email = '{form_data.username}'")
    if not users:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect email or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
    user = users[0]
    if not auth.verify_password(form_data.password, user["hashed_password"]):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect email or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
    access_token_expires = timedelta(minutes=auth.ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = auth.create_access_token(
        data={"sub": user["email"]}, expires_delta=access_token_expires
    )
    return {"access_token": access_token, "token_type": "bearer"}

@app.post("/users/", response_model=schemas.User)
async def create_user(user: schemas.UserCreate):
    existing = database.run_query(f"SELECT * FROM app_users WHERE email = '{user.email}'")
    if existing:
        raise HTTPException(status_code=400, detail="Email already registered")
    
    hashed_password = auth.get_password_hash(user.password)
    database.run_query(
        f"INSERT INTO app_users (email, hashed_password) VALUES ('{user.email}', '{hashed_password}')"
    )
    new_user = database.run_query(f"SELECT * FROM app_users WHERE email = '{user.email}'")[0]
    return new_user

@app.get("/users/me/", response_model=schemas.User)
async def read_users_me(current_user: dict = Depends(auth.get_current_user)):
    return current_user
