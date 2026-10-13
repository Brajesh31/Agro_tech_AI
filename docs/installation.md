# Installation

This guide covers local development for the primary application and the standalone services.

## Prerequisites

Install:

- Git
- Node.js 18 or newer and npm
- Docker Desktop with Docker Compose
- Python 3 for Flask/Streamlit services
- A compatible Python runtime for legacy TensorFlow/PyTorch services

Check the primary tools:

```powershell
node --version
npm --version
docker --version
docker compose version
py --version
```

## Recommended setup: Docker Compose

From the repository root:

```powershell
docker compose -f Docker-compose.yml up --build
```

Open <http://localhost:5173>. The backend is available at <http://localhost:8080> and MongoDB listens on port `27017`.

Stop the services:

```powershell
docker compose -f Docker-compose.yml down
```

The Compose file uses a named MongoDB volume. Add `-v` only when you intentionally want to delete local database data.

## Local Node.js setup

Create local environment files from the examples and fill in only the values required for the features you use:

```powershell
Copy-Item .env.example .env
Copy-Item backend\.env.sample backend\.env
Copy-Item frontend\.env.sample frontend\.env
```

Run the backend:

```powershell
Set-Location backend
npm ci
npm run dev
```

Run the frontend in a second terminal:

```powershell
Set-Location frontend
npm ci
npm run dev
```

If the backend runs on a different host or port, set `VITE_BACKEND_BASE_URL` in `frontend/.env`.

## Python service setup

Use one environment per service:

```powershell
Set-Location agrotech-ai-apis
py -m venv .venv
.\.venv\Scripts\Activate.ps1
python -m pip install --upgrade pip
pip install -r requirements.txt
python app.py
```

Repeat with the target service directory and its own `requirements.txt`. Most Flask services use `python app.py`; inspect the entrypoint if the directory has a different launcher.

For `agrotech-ai-chatbot`:

```powershell
Set-Location agrotech-ai-chatbot
py -m venv .venv
.\.venv\Scripts\Activate.ps1
pip install -r requirements.txt
streamlit run src\main.py
```

## Configuration

Use environment variables for credentials. The root [`.env.example`](../.env.example) shows the common names, while service-local samples document additional values. Never copy real keys into `config.json`, source code, issues, or pull requests.

## Windows notes

- PowerShell execution policy may prevent activation; use an approved virtual-environment workflow rather than weakening system policy globally.
- Native TensorFlow and old PyTorch wheels may not support every Python version. Use a compatible interpreter or container for those services.
- Keep model artifacts out of source-control changes unless the model is intentionally versioned and reviewable.
