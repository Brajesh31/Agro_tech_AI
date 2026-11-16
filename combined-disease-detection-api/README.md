# 🦠 Combined Disease Detection API

This directory contains a Flask service for image-based plant disease prediction using the model artifact `plant_disease_model.tflite`.

## Files

- `app.py`: Flask application and prediction route.
- `plant_disease_model.tflite`: TensorFlow Lite model.
- `requirements.txt`: service dependencies.

## Setup

```bash
python -m venv .venv
source .venv/bin/activate
python -m pip install --upgrade pip
pip install -r requirements.txt
```

Use a Python version compatible with the TensorFlow package in the requirements file.

## Run

```bash
python app.py
```

Inspect `app.py` for the route, accepted upload field, image preprocessing, and runtime port. Do not assume the request contract matches other disease APIs.

## Model safety and validation

Test with representative images from supported classes and images outside the supported domain. Document class labels, preprocessing, evaluation data, per-class metrics, and model version. Predictions are advisory and should be reviewed by a qualified agricultural expert.
