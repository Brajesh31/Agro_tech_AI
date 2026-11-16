# 🍃 Disease Prediction API

This directory contains a Flask-based image disease prediction service.

## Main files

- `app.py`: Flask application and request handling.
- `CNN.py`: model-related code.
- `plant_disease_detection.tflite`: TensorFlow Lite model artifact.
- `disease_info.csv` and `supplement_info.csv`: disease and supplementary information.
- `requirements.txt`: Python dependencies.
- `static/uploads/`: sample/static upload assets. Do not use this directory as unrestricted production storage.

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

Check `app.py` for the actual route, upload field, accepted image types, preprocessing, and port. The API contract may differ from the other disease services in this repository.

## Production requirements

Use secure temporary storage, random server-generated filenames, upload size limits, content validation, cleanup after inference, and private storage for any retained image. Do not expose debug mode or raw exception messages.

## Model documentation

Document supported classes, model version, training data source/license, image preprocessing, evaluation split, per-class metrics, and known limitations. Treat results as advisory.
