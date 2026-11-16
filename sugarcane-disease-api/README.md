# 🌿 Sugarcane Disease Recognition API

This directory contains a Flask service for image-based sugarcane disease classification.

## Files

- `app.py`: Flask route and disease descriptions.
- `prediction.py`: image preprocessing and model inference.
- `models/`: model artifact directory and model notes.
- `requirements.txt`: Python dependencies.
- `uploaded_image/`: upload-related directory documentation.

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

The service exposes `GET /` for status and `POST /submit_sugarcane` for image submission. The current upload field is `image`. Inspect the implementation for accepted formats, model path, and preprocessing.

## Production requirements

Use generated filenames, validate image content and size, store temporary uploads outside the public web root, and clean them after inference. Restrict CORS and disable debug mode.

## Model limitations

Document the training dataset, supported classes, preprocessing, evaluation metrics, and known failure modes. Predictions should be checked by qualified crop specialists before treatment decisions.
