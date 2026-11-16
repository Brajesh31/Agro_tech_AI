# 🌾 Paddy Disease Recognition API

This directory contains a Flask API for image-based paddy disease recognition.

## Files

- `app.py`: Flask routes, class labels, descriptions, and request handling.
- `prediction.py`: image preprocessing and inference helper.
- `model/rice_model.h5`: Keras model artifact.
- `requirements.txt`: Python dependencies.
- `uploaded_image/`: upload-related directory documentation.

## Setup

```bash
python -m venv .venv
source .venv/bin/activate
python -m pip install --upgrade pip
pip install -r requirements.txt
```

Use a Python and TensorFlow/Keras version compatible with the saved model.

## Run

```bash
python app.py
```

Inspect the entrypoint for the exact host, port, accepted multipart field, and response schema. The application imports `predict_paddy` from `prediction.py`.

## Production requirements

Use generated filenames, validate file content and size, store temporary uploads outside the public web root, and clean them after inference. Restrict CORS, disable debug mode, and avoid returning raw exception details.

## Model limitations

Document dataset provenance, supported classes, preprocessing, model version, evaluation split, per-class metrics, and known failure cases. A model result is not a definitive crop diagnosis. Verify with qualified agricultural experts before treatment decisions.
