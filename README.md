# CyberForge Portfolio

A one-stop portfolio and resume platform for cybersecurity professionals.

## Tech Stack
- **Frontend**: Vite + React + Tailwind CSS 4 + Lucide Icons
- **Backend**: FastAPI (Python)
- **Database**: SQLite (via `team-db` Turso sync)

## Project Structure
- `/backend`: FastAPI application
  - `app/auth.py`: JWT-based authentication
  - `app/projects.py`: API endpoints for serving security project templates
  - `app/database.py`: Turso-synced database wrapper
- `/frontend`: Vite + React application
  - `src/pages/Home.jsx`: Landing page
  - `src/pages/Dashboard.jsx`: User dashboard with domain progress
  - `src/pages/ProjectWorkspace.jsx`: Interactive project laboratory
  - `src/pages/ResumeBuilder.jsx`: ATS resume alignment tool
  - `src/pages/Pricing.jsx`: Subscription plans
  - `src/pages/PublishedPortfolio.jsx`: Recruiter-facing public portfolio

## How to Run

### 1. Backend
```bash
cd backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --host 0.0.0.0 --port 8000
```

### 2. Frontend
```bash
cd frontend
npm install
npm run dev -- --host 0.0.0.0
```

The application will be available at http://localhost:3000 (proxied to backend on port 8000).

## Content
Security project templates are stored in `/home/team/shared/content/` and served dynamically by the backend.
Design mockups and assets are located in `/home/team/shared/design/`.
