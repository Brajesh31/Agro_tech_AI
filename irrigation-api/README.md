# 💧 Irrigation Model Service

This directory contains irrigation-related model training and prediction assets.

## Current files

- `irrigation.py`: generates a simulated dataset, trains a multi-output linear regression model, evaluates it, and writes `irrigation_model.pkl`.
- `irrigation_model.pkl`: serialized trained model.
- `label_encoder.py` and `label_encoder.pkl`: label encoding helper/artifact.
- `simulated_irrigation_data.csv`: simulated training data.
- `app.py` and `requirements.txt`: currently empty placeholders.

## Important status

**This directory does not currently contain a working Flask API entrypoint.** The `app.py` and `requirements.txt` files are zero bytes. Do not document or deploy this folder as a functioning web API until an application contract, dependencies, and startup command are implemented.

The training script uses generated/simulated data. Its reported score is not evidence of real-world agronomic accuracy.

## Environment

Create a dedicated Python virtual environment and install the dependencies needed by `irrigation.py`, including pandas, NumPy, scikit-learn, and the serialization/runtime requirements.

## Run training

```bash
python irrigation.py
```

Run from this directory because the script reads and writes model files using relative paths. Training overwrites the model artifact.

## Before building an API

Define the input schema, units, categorical encoding, output meaning, model loading behavior, input validation, error format, and evaluation on representative field data. Add tests and a non-debug production server configuration.
