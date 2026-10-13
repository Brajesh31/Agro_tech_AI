# AgroTech AI APIs

This directory contains the broad Flask-based agricultural AI service. It groups crop recommendation, plant disease detection, seed quality prediction, mushroom classification, and location-based lookup features behind one Python application.

## Features and routes

| Method | Route | Purpose |
| --- | --- | --- |
| POST | `/find_soil_labs` | Find nearby soil testing laboratories |
| POST | `/find_ee_shops` | Find nearby electrical/electronics shops |
| POST | `/mushroom_edibility` | Classify mushroom edibility |
| POST | `/crop_recommendation` | Recommend a crop from agricultural inputs |
| POST | `/predict_seed_quality` | Predict seed quality |
| POST | `/predict` | Predict plant disease from an image |

The exact JSON fields and image field names are defined in [`app.py`](app.py). Treat them as the current contract until a versioned API specification is introduced.

## Stack

- Python and Flask
- Flask-CORS and Gunicorn
- TensorFlow, scikit-learn, XGBoost, NumPy, pandas, Pillow
- Google Generative AI and external lookup providers

## Local setup

```powershell
py -m venv .venv
.\.venv\Scripts\Activate.ps1
python -m pip install --upgrade pip
pip install -r requirements.txt
Copy-Item .env-sample .env
python app.py
```

Most local Flask runs listen on port 5000 unless the application config says otherwise.

## Models and data

The directory contains serialized model artifacts and supporting data used by the prediction modules. Do not replace an artifact without documenting its training source, preprocessing, labels, evaluation results, and compatible dependency versions.

## Configuration

Use `.env` for provider credentials such as `GOOGLE_API_KEY`. Never commit a real key or place it in a JSON configuration file. Restrict CORS origins and request sizes before deployment.

## Validation

Run a health or smoke request after starting the service. Test both valid and invalid JSON/image requests, and confirm that errors do not expose stack traces or credentials. Review the repository-level [`SECURITY.md`](../SECURITY.md) before deploying.
