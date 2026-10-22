# AgroTech AI

AgroTech AI is an open-source agricultural technology platform that combines a web application, a Node.js application backend, machine-learning APIs, and farmer-focused tools. The project brings crop recommendations, disease detection, crop rotation, irrigation guidance, soil and seed analysis, market information, agricultural assistance, and related services into one repository.

> **Project status:** Active development. Several services are production-shaped prototypes and research integrations. Review the deployment and security guidance before exposing any service to the public internet.

## What is in this repository?

The repository is a multi-service monorepo:

| Area | Directory | Technology | Purpose |
| --- | --- | --- | --- |
| Web application | [`frontend/`](frontend/) | React, Vite, Tailwind CSS | Main browser experience |
| Application backend | [`backend/`](backend/) | Node.js, Express, MongoDB/Mongoose | Accounts, application workflows, email, payments, and scheduled jobs |
| Quiz application | [`agro-quiz-app/`](agro-quiz-app/) | Next.js, React, TypeScript | Standalone agricultural quiz experience |
| Consolidated AI API | [`agrotech-ai-apis/`](agrotech-ai-apis/) | Flask, TensorFlow/scikit-learn | Crop, seed, mushroom, disease, soil-lab, and shop endpoints |
| Consolidated API variant | [`api/`](api/) | Flask, TensorFlow, scikit-learn | Extended prediction and commodity endpoints |
| Legacy API variant | [`agrotech-api\`s/`](agrotech-api`s/) | Flask, scikit-learn | Crop, fertilizer, irrigation, soil, price, and commodity endpoints |
| Specialist APIs | `*-api/`, [`mushroom-edibility/`](mushroom-edibility/), [`seed-qual-predictor/`](seed-qual-predictor/) | Flask and ML libraries | Independently deployable prediction and lookup services |
| Chatbot | [`agrotech-ai-chatbot/`](agrotech-ai-chatbot/) | Streamlit, Groq | Agricultural conversational assistant |

The root [`Docker-compose.yml`](Docker-compose.yml) runs the primary frontend/backend/MongoDB development stack. The standalone Python services are not all included in that Compose file and must be run from their own directories.

## Core capabilities

- Farmer-facing web navigation and agricultural workflows.
- Crop recommendation and crop rotation assistance.
- Plant, paddy, and sugarcane disease detection.
- Seed quality, mushroom edibility, soil quality, irrigation, and fertilizer prediction.
- Soil testing laboratory and electrical/electronics shop discovery.
- Agricultural chatbot and Gemini/Groq-backed assistance.
- Market and commodity-related prediction endpoints.
- User authentication and Google OAuth integration in the Node.js backend.
- Email workflows, scheduled jobs, and payment-related integration points.

Machine-learning predictions are decision-support features, not a substitute for qualified agronomists, plant pathologists, veterinarians, or local government guidance. Validate model output against local conditions before taking action.

## Quick start: primary stack

### Prerequisites

- Git
- Node.js 18 or newer
- npm
- Docker Desktop with Compose
- A MongoDB instance (the Compose setup provides MongoDB 6)

Optional services require Python 3 and the package versions listed in their local `requirements.txt` files. Some older model services may require a compatible legacy Python/TensorFlow/PyTorch environment.

### Run with Docker Compose

From the repository root:

```powershell
docker compose -f Docker-compose.yml up --build
```

The default development endpoints are:

- Frontend: <http://localhost:5173>
- Node.js backend: <http://localhost:8080>
- MongoDB: `mongodb://localhost:27017`

Stop the stack with:

```powershell
docker compose -f Docker-compose.yml down
```

To remove the local MongoDB volume as well:

```powershell
docker compose -f Docker-compose.yml down -v
```

The last command deletes local development data. Do not use it when preserving a database is important.

### Run without Docker

Create local environment files from the checked-in examples, fill them with local values, and never commit the resulting files:

```powershell
Copy-Item backend\.env.sample backend\.env
Copy-Item frontend\.env.sample frontend\.env
```

Then start the backend:

```powershell
Set-Location backend
npm ci
npm run dev
```

In another terminal, start the frontend:

```powershell
Set-Location frontend
npm ci
npm run dev
```

The frontend uses `VITE_BACKEND_BASE_URL` to locate the backend. Update it for your local environment instead of hard-coding a URL in source.

## Running an individual Python API

Each Python service is intentionally self-contained. For example:

```powershell
Set-Location agrotech-ai-apis
py -m venv .venv
.\.venv\Scripts\Activate.ps1
python -m pip install --upgrade pip
pip install -r requirements.txt
python app.py
```

Use the service-specific entrypoint and environment variables described in [`docs/installation.md`](docs/installation.md). Flask services commonly expose port 5000, but inspect the service entrypoint before changing a deployment or health check.

## API overview

The primary Flask API variants expose endpoints such as:

| Endpoint | Method | Typical purpose |
| --- | --- | --- |
| `/` | GET | Health/status response |
| `/crop_recommendation` or `/crop_predict` | POST | Crop recommendation |
| `/crop_rotation` | POST | Crop rotation recommendation |
| `/disease_predict`, `/predict`, `/submit_paddy`, `/submit_sugarcane` | POST | Disease/image prediction |
| `/fertilizer_predict` | POST | Fertilizer recommendation |
| `/soil_quality_predict` | POST | Soil quality prediction |
| `/irrigation` | POST | Irrigation recommendation |
| `/find_soil_labs` | POST | Soil laboratory lookup |
| `/find_ee_shops` | POST | Electrical/electronics shop lookup |
| `/mushroom_edibility` | POST | Mushroom edibility classification |
| `/price_predict`, `/commodity_predict` | GET/POST | Market or commodity predictions |

Request fields and model-specific response schemas vary by service. See [`docs/api.md`](docs/api.md) and the relevant service `app.py` before integrating.

## Development

Install dependencies with lockfiles where available:

```powershell
Set-Location frontend; npm ci; npm run lint; npm run build
Set-Location ..\backend; npm ci; npm test
Set-Location ..\agro-quiz-app; npm ci; npm run build
```

For Python services, create an isolated environment per service and run the service's tests or a smoke request. See [`docs/development.md`](docs/development.md) for conventions, validation, and pull request expectations.

## Deployment

The repository contains Vercel configuration for selected Node.js and Python services and Dockerfiles for the primary frontend/backend. Deployment is service-specific; do not assume that deploying one directory deploys the entire platform. Read [`docs/deployment.md`](docs/deployment.md) before deploying.

## Documentation

- [Installation guide](docs/installation.md)
- [Development guide](docs/development.md)
- [Architecture](docs/architecture.md)
- [Deployment](docs/deployment.md)
- [API overview](docs/api.md)
- [Database](docs/database.md)
- [Troubleshooting](docs/troubleshooting.md)
- [Frequently asked questions](docs/faq.md)
- [Roadmap](ROADMAP.md)
- [Changelog](CHANGELOG.md)

## Contributing and support

Please read [`CONTRIBUTING.md`](CONTRIBUTING.md), [`CODE_OF_CONDUCT.md`](CODE_OF_CONDUCT.md), and [`SECURITY.md`](SECURITY.md) before opening an issue or pull request. Questions and feature discussions should use GitHub Discussions or a support issue where available; security reports must follow the private reporting process.

## License

AgroTech AI is distributed under the [MIT License](LICENSE).

Last updated: 2026-10-22 21:02 UTC
