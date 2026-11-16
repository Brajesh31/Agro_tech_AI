# 🧠 Consolidated Flask API Variant

This directory contains an independent Flask API implementation with crop, fertilizer, soil, disease, crop rotation, chatbot, and market-related prediction/lookup code.

## Contents

- `app.py`: Flask application and route definitions.
- `requirements.txt`: Python dependencies.
- `config.json`: currently tracked provider configuration, which must not contain real credentials.
- `*.pkl`, `*.tflite`: serialized models used by the service.
- `crops/`: crop-specific CSV data and related assets.

## Setup

Use a compatible Python version and a dedicated virtual environment:

```bash
python -m venv .venv
source .venv/bin/activate
python -m pip install --upgrade pip
pip install -r requirements.txt
```

Windows PowerShell activation: `.venv\\Scripts\\Activate.ps1`.

## Configuration

The current application reads Google and Groq provider configuration. Move all credentials to environment variables or a secret manager. Do not commit real values to `config.json`. Rotate any credential that has ever been committed.

## Run

```bash
python app.py
```

Inspect the entrypoint for the configured host and port. Use a production WSGI server for deployment, not Flask debug mode.

## API

The code contains route families for soil laboratory lookup, chatbot interaction, disease prediction, crop recommendation, crop rotation, fertilizer, soil quality, price, and commodity prediction. The exact routes and request schemas are defined in `app.py`; consult the root [API guide](../docs/api.md).

## Model compatibility

The model files depend on their original preprocessing, feature ordering, class labels, and library versions. Do not replace or load an artifact from an untrusted source. Document provenance and evaluation before publishing a new model.
