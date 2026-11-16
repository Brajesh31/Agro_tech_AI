# 🗂️ Legacy Agricultural Flask API

This directory contains a legacy Flask API variant with crop recommendation, fertilizer, irrigation, soil quality, price, and commodity-related functionality.

## Contents

- `app.py`: Flask routes and prediction logic.
- `requirements.txt`: pinned Python dependencies.
- `*.pkl`: serialized model artifacts.
- `crops/`: crop-specific CSV files and related assets.
- `vercel.json`: deployment configuration.

## Setup

Create a dedicated Python virtual environment. The dependency file pins older versions, so use a Python runtime compatible with those packages.

```bash
python -m venv .venv
source .venv/bin/activate
python -m pip install --upgrade pip
pip install -r requirements.txt
```

On Windows, activate with `.venv\\Scripts\\Activate.ps1`.

## Run

```bash
python app.py
```

Inspect `app.py` for the current port, route methods, required input fields, and model paths.

## API and integration

This is a separate implementation from `api/` and `agrotech-ai-apis/`. Similar endpoint names do not guarantee identical request formats or model behavior. Check the route decorators and frontend configuration before switching deployments.

## Maintenance

- Preserve the exact preprocessing and feature order expected by each model.
- Validate model compatibility with the pinned scikit-learn and NumPy versions.
- Do not load untrusted pickle files.
- Move credentials to environment variables.
- Restrict CORS and disable debug mode in production.
- Document model provenance, evaluation metrics, and limitations.
