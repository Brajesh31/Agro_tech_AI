# 🧪 Soil Testing Labs Lookup API

This directory contains a Flask endpoint that uses Google Generative AI to produce a structured list of soil testing laboratories for a supplied location.

## Files

- `app.py`: Flask app, prompt construction, provider call, and JSON parsing.
- `requirements.txt`: Python dependencies.

## Setup

```bash
python -m venv .venv
source .venv/bin/activate
python -m pip install --upgrade pip
pip install -r requirements.txt
```

Configure `GOOGLE_API_KEY` in a local environment file or secret manager. Never commit provider credentials.

## Run

```bash
python app.py
```

The endpoint is `POST /find_soil_labs`. It expects JSON with a `location` field. Inspect `app.py` for the exact response behavior.

## Reliability and safety

The current implementation relies on generated provider output and extracts JSON from model text. Treat returned lab names, coordinates, and map links as unverified until checked against an authoritative source. Add schema validation, provider timeouts, rate limiting, explicit CORS origins, and safe error handling before production deployment.

Do not log precise user locations without a clear need and retention policy.
