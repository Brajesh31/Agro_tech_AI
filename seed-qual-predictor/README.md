# 🌾 Seed Quality Predictor

This directory contains a Flask API that classifies uploaded seed images into the model's configured categories.

## Files

- `app.py`: Flask application and image prediction endpoint.
- `model/model.h5`: Keras model artifact.
- `requirements.txt`: Python dependencies.

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

The service exposes `GET /` for a basic status response and `POST /predict` for image prediction. The upload field is `file`. The implementation expects a grayscale image resized to 120 by 120 pixels.

## Production review required

The current implementation saves uploads using the supplied filename under `./uploads`. Before public deployment, use server-generated filenames, validate image content and size, create a private temporary directory, handle unreadable images safely, and guarantee cleanup on errors. Restrict CORS and do not expose debug mode.

## Model limitations

The output classes are currently `broken`, `discolored`, and `pure`. Document the dataset, class balance, evaluation metrics, and supported seed types before using results in field decisions.
