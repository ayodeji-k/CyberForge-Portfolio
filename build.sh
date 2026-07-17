#!/bin/bash
# CyberForge Portfolio - Render build script
set -e

# Navigate to backend directory and install dependencies
cd backend
pip install -r requirements.txt

echo "Build completed successfully"
