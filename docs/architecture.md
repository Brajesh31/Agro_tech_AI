# Architecture

## Overview

AgroTech AI is a multi-service monorepo rather than a single deployable binary. The supported primary path is a browser frontend backed by an Express API and MongoDB. Flask and Streamlit services provide specialist machine-learning and agricultural capabilities and can be deployed independently.

```text
Browser
  |
  v
frontend (React + Vite, :5173)
  |
  v
backend (Node.js + Express, :8080 in Compose)
  | \
  |  +--> MongoDB 6 (:27017)
  |  +--> Google OAuth / Gemini, SMTP, Stripe, scheduled jobs
  |
  +--> specialist Flask/ML services
          |--> crop, disease, soil, irrigation, seed, market services
          |--> external geocoding/search and generative-AI providers

Optional:
agro-quiz-app (Next.js)
agrotech-ai-chatbot (Streamlit + Groq)
```

## Service boundaries

### Primary application

- `frontend/` is a Vite-powered React application. It owns browser routing, presentation, client state, maps, charts, and calls to the backend.
- `backend/` is an Express application. It owns server-side workflows, authentication, persistence, email, payments, and scheduled operations.
- MongoDB stores application data through Mongoose. The Compose volume is local-development-only.

### AI and data services

The repository contains several Flask services because model dependencies and deployment needs differ:

- `agrotech-ai-apis/` is the broad consolidated service.
- `api/` and `agrotech-api\`s/` are parallel/legacy consolidated variants.
- `combined-disease-detection-api/`, `crop-rotation-api/`, `disease-prediction-api/`, `irrigation-api/`, `mushroom-edibility/`, `paddy-backend-api/`, `seed-qual-predictor/`, `soil-testing-labs-api/`, and `sugarcane-disease-api/` focus on individual capabilities.
- `agrotech-ai-chatbot/` is a Streamlit chatbot and is not part of the primary Compose stack.
- `agro-quiz-app/` is a separate Next.js application.

Do not expose every service publicly by default. Prefer a gateway, authentication, rate limiting, private networking, and explicit service allowlists.

## Request and data flow

1. A user interacts with the frontend.
2. The frontend sends authenticated or anonymous requests to the configured backend base URL.
3. The backend validates the request, performs application logic, and reads/writes MongoDB where needed.
4. Prediction or lookup requests are routed to the selected specialist service or provider.
5. The result is returned to the browser and presented as decision support.

Model artifacts (`.pkl` and `.tflite`) are loaded by individual Python services. Their input schemas, preprocessing, and output labels are service-specific and must be versioned with the model.

## Architectural risks and boundaries

- Multiple API implementations create a risk of behavior drift. Treat `api/` and `agrotech-api\`s/` as separate deployments until consolidated.
- Some services use legacy dependency versions. Build them in isolated environments and do not share one global Python environment.
- External provider keys, uploaded images, and model files require separate security and retention policies.
- The current Compose file starts only `frontend`, `backend`, and `mongo`; it does not automatically start the specialist services.

## Evolution guidance

New features should be added to the smallest service that owns the capability. Document a stable request/response contract before connecting a new service to the frontend. Prefer asynchronous jobs for long-running model inference and use a shared observability convention before adding more deployable services.
