# API overview

The repository contains multiple Flask APIs and one Express backend. This page is a directory of the currently visible endpoint families, not a replacement for a versioned OpenAPI specification.

## Express backend

The backend is in [`backend/index.js`](../backend/index.js). Its public application route includes:

| Method | Path | Purpose |
| --- | --- | --- |
| GET | `/` | Backend status |
| POST | `/api/send-email` | Send an application email |

Additional authentication, user, payment, and application routes may be registered by backend route modules. Review `backend/routes/` and controllers before integrating.

## Consolidated Flask APIs

The exact request fields differ between variants. Inspect the corresponding `app.py` before sending production traffic.

| Service | Endpoint | Method | Purpose |
| --- | --- | --- | --- |
| `agrotech-ai-apis` | `/find_soil_labs` | POST | Soil laboratory lookup |
| `agrotech-ai-apis` | `/find_ee_shops` | POST | Electrical/electronics shop lookup |
| `agrotech-ai-apis` | `/mushroom_edibility` | POST | Mushroom classification |
| `agrotech-ai-apis` | `/crop_recommendation` | POST | Crop recommendation |
| `agrotech-ai-apis` | `/predict_seed_quality` | POST | Seed quality prediction |
| `agrotech-ai-apis` | `/predict` | POST | Plant disease prediction |
| `api` | `/soil_labs` | POST | Soil laboratory lookup |
| `api` | `/chatbot` | POST | Chatbot interaction |
| `api` | `/disease_predict` | POST | Disease prediction |
| `api` | `/crop_rotation` | POST | Crop rotation |
| `api` | `/crop_predict` | POST | Crop recommendation |
| `api` | `/fertilizer_predict` | POST | Fertilizer prediction |
| `api` | `/soil_quality_predict` | POST | Soil quality prediction |
| `api` | `/price_predict` | GET | Price prediction |
| `api` | `/commodity_predict` | POST | Commodity prediction |
| `agrotech-api\`s` | `/crop_predict` | POST | Crop recommendation |
| `agrotech-api\`s` | `/fertilizer_predict` | POST | Fertilizer prediction |
| `agrotech-api\`s` | `/irrigation` | POST | Irrigation recommendation |
| `agrotech-api\`s` | `/soil_quality_predict` | POST | Soil quality prediction |
| `agrotech-api\`s` | `/price_predict` | GET | Price prediction |
| `agrotech-api\`s` | `/commodity_predict` | POST | Commodity prediction |

## Specialist Flask APIs

- `combined-disease-detection-api`: `POST /predict`
- `crop-rotation-api`: `POST /crop_recommendation`
- `disease-prediction-api`: `POST /submit`
- `electrical-electronics-shops-api`: `POST /find_ee_shops`
- `irrigation-api`: inspect `irrigation.py` for the intended launcher and contract
- `mushroom-edibility`: `POST /mushroom_edibility`
- `paddy-backend-api`: `POST /submit_paddy`
- `seed-qual-predictor`: `GET /`, `POST /predict`
- `soil-testing-labs-api`: `POST /find_soil_labs`
- `sugarcane-disease-api`: `GET /`, `POST /submit_sugarcane`

## Integration guidance

Use `Content-Type: application/json` for JSON endpoints and `multipart/form-data` for image uploads when the service reads an uploaded file. Confirm field names and accepted image formats in the target service before integrating. Do not send real farmer or patient-like personal data while testing.

## Versioning and errors

The current services do not share a single versioned contract. New public integrations should introduce a versioned gateway or route prefix, consistent error objects, correlation IDs, validation, and an OpenAPI document. Never expose debug tracebacks in production responses.
