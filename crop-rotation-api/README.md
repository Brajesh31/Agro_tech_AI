# 🌱 Crop Rotation API

This directory contains a Flask service for crop rotation recommendation. It loads `crop_rotation_recommendation_model.pkl` for inference.

## Files

- `app.py`: Flask route and prediction logic.
- `crop_rotation_recommendation_model.pkl`: serialized model artifact.
- `requirements.txt`: Python dependencies.

## Setup and run

```bash
python -m venv .venv
source .venv/bin/activate
python -m pip install --upgrade pip
pip install -r requirements.txt
python app.py
```

Use the Python runtime supported by the installed scikit-learn and related packages.

## API contract

Inspect the route decorator and request parsing in `app.py` for the current method, path, required fields, and response. The root [API guide](../docs/api.md) lists this service as a separate endpoint.

## Model maintenance

A serialized model is tied to its training features, encoding, and dependency versions. Record dataset provenance, crop labels, preprocessing, model version, and evaluation results before replacing the artifact. Treat recommendations as decision support, not guaranteed agronomic advice.
