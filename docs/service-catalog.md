# 🗂️ Service Catalog

AgroTech AI is a multi-service repository. This catalog maps the main directories to their purpose and local documentation.

## Primary application

| Service | Directory | Local guide |
|---|---|---|
| Browser frontend | `frontend/` | [Frontend README](../frontend/README.md) |
| Express backend | `backend/` | [Backend README](../backend/README.md) |
| Quiz application | `agro-quiz-app/` | [Quiz README](../agro-quiz-app/README.md) |
| Flask chatbot API | `agrotech-ai-chatbot/` | [Chatbot README](../agrotech-ai-chatbot/README.md) |

## Consolidated APIs

| Service | Directory | Local guide |
|---|---|---|
| Consolidated AI APIs | `agrotech-ai-apis/` | [API README](../agrotech-ai-apis/README.md) |
| Additional API variant | `api/` | [API README](../api/README.md) |
| Legacy API variant | ``agrotech-api`s/`` | [Legacy API README](../agrotech-api%60s/README.md) |

## Specialist APIs

| Service | Directory | Local guide |
|---|---|---|
| Combined disease detection | `combined-disease-detection-api/` | [README](../combined-disease-detection-api/README.md) |
| Crop rotation | `crop-rotation-api/` | [README](../crop-rotation-api/README.md) |
| Disease prediction | `disease-prediction-api/` | [README](../disease-prediction-api/README.md) |
| Electrical/electronics shop lookup | `electrical-electronics-shops-api/` | [README](../electrical-electronics-shops-api/README.md) |
| Irrigation model assets | `irrigation-api/` | [README](../irrigation-api/README.md) |
| Mushroom classifier | `mushroom-edibility/` | [README](../mushroom-edibility/README.md) |
| Paddy disease recognition | `paddy-backend-api/` | [README](../paddy-backend-api/README.md) |
| Seed quality prediction | `seed-qual-predictor/` | [README](../seed-qual-predictor/README.md) |
| Soil testing lab lookup | `soil-testing-labs-api/` | [README](../soil-testing-labs-api/README.md) |
| Sugarcane disease recognition | `sugarcane-disease-api/` | [README](../sugarcane-disease-api/README.md) |

## Service status caveats

- `irrigation-api/` currently contains a training script and model artifacts, but its `app.py` is empty. The requirements file supports training only. It is not a functioning Flask API yet.
- Similar API variants may have different schemas and model artifacts. Do not switch frontend URLs based only on matching endpoint names.
- The root Compose file runs only the main frontend, backend, and MongoDB.
- Python dependencies and model runtime versions must be isolated by service.

## Shared operational guides

- [Installation](installation.md)
- [Configuration](configuration.md)
- [Architecture](architecture.md)
- [API overview](api.md)
- [Model documentation](models.md)
- [Testing](testing.md)
- [Deployment](deployment.md)
- [Privacy](privacy.md)
- [Security policy](../SECURITY.md)
