#!/usr/bin/env bash
set -e

echo "Installing Python dependencies..."
pip install --upgrade pip setuptools wheel
pip install --only-binary :all: -r backend/requirements.txt

echo "Build completed successfully!"
