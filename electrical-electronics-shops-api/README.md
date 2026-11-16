# 📍 Electrical and Electronics Shops Lookup API

This directory contains a Flask service for location-based lookup of electrical/electronics shops.

## Files

- `app.py`: Flask application and lookup endpoint.
- `requirements.txt`: Python dependencies.

## Setup

```bash
python -m venv .venv
source .venv/bin/activate
python -m pip install --upgrade pip
pip install -r requirements.txt
```

## Run

```bash
python app.py
```

Inspect `app.py` for the current endpoint, request schema, external provider dependencies, and port.

## Configuration and safety

If the service calls external geocoding, maps, or search providers, configure credentials through environment variables. Restrict CORS, validate and normalize location inputs, apply provider timeouts and rate limits, and avoid logging exact user locations unnecessarily.

Lookup results may be incomplete or outdated. Users should verify business details before travel or purchase.
