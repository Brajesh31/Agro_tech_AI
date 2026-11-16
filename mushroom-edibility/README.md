# 🍄 Mushroom Edibility Classifier

This directory contains a Flask classifier using a serialized model and categorical encoders.

## Files

- `app.py`: Flask endpoint and form parsing.
- `data/maps.py`: categorical value mappings.
- `data/mushrooms.csv`: dataset.
- `models/model.pkl`: classifier.
- `models/encoders.pkl`: fitted encoders.
- `notebook/`: exploratory classification notebook.
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

The route is `POST /mushroom_edibility`. The current implementation reads categorical values from form fields. The exact required field names are defined in the `mappings` dictionary in `app.py`.

## Critical food-safety limitation

**Never eat or serve a wild mushroom based on this model's output.** A classifier can misidentify species and may not generalize beyond its dataset. This service is not a food-safety test and must not be used to decide whether a mushroom is safe to consume.

## Maintenance

Keep the mapping dictionary, fitted encoders, model feature order, and dataset labels synchronized. Test missing and unknown category values. Do not load untrusted pickle files. Disable Flask debug mode and restrict CORS before deployment.
