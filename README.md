# 🌾 AgroTech AI

<p align="center"><strong>An agricultural technology platform connecting farmer-focused tools, machine-learning services, and digital commerce.</strong></p>
<p align="center"><a href="https://github.com/Brajesh31/Agro_tech_AI">Repository</a> · <a href="https://github.com/Brajesh31/Agro_tech_AI/issues">Issues</a> · <a href="docs/README.md">Documentation</a> · <a href="LICENSE">MIT License</a></p>

---

## 📚 Table of Contents

1. [Project Overview](#-project-overview)
2. [Platform Scope](#-platform-scope)
3. [Features](#-features)
4. [Repository Architecture](#-repository-architecture)
5. [Technology Stack](#-technology-stack)
6. [Prerequisites](#-prerequisites)
7. [Quick Start with Docker](#-quick-start-with-docker)
8. [Local Frontend and Backend Setup](#-local-frontend-and-backend-setup)
9. [Running Python Services](#-running-python-services)
10. [Environment Configuration](#-environment-configuration)
11. [API Services](#-api-services)
12. [Data and Model Artifacts](#-data-and-model-artifacts)
13. [Testing and Quality Checks](#-testing-and-quality-checks)
14. [Security](#-security)
15. [Privacy and Responsible AI](#-privacy-and-responsible-ai)
16. [Deployment](#-deployment)
17. [Troubleshooting](#-troubleshooting)
18. [Contributing](#-contributing)
19. [Roadmap](#-roadmap)
20. [Documentation](#-documentation)
21. [License](#-license)

---

## 🎯 Project Overview

**AgroTech AI** is a multi-service agricultural technology platform. The repository combines a React browser application, a Node.js/Express backend, MongoDB persistence, independent Flask machine-learning APIs, an agricultural chatbot, and a standalone quiz application.

The aim is to bring agricultural information and digital workflows into one platform: crop recommendation, disease recognition, soil and seed insights, irrigation and fertilizer assistance, market information, agricultural discussion, and agri-product and equipment rental experiences.

This repository is a large monorepo, not one single deployable application. Each service has its own dependencies, startup process, configuration, and deployment constraints. The root Docker Compose file starts only the primary frontend, backend, and MongoDB services. Specialist model APIs and optional applications must be started separately.

> [!IMPORTANT]
> ML outputs are decision-support suggestions. They are not guaranteed diagnoses, official agricultural recommendations, or a substitute for local agronomists, plant pathologists, extension officers, or other qualified experts. Validate advice against crop variety, location, season, soil conditions, and local regulations.

### Project snapshot

| Layer | Current implementation |
|---|---|
| Main frontend | React 18, Vite, React Router |
| Application backend | Node.js, Express |
| Primary database | MongoDB through Mongoose |
| Primary local orchestration | Docker Compose |
| Specialist AI services | Multiple Flask applications |
| Model runtime | TensorFlow / TensorFlow Lite, scikit-learn, joblib and pickle artifacts |
| Quiz application | Next.js, React, TypeScript |
| Chatbot application | Streamlit and Groq integration |
| Authentication integrations | JWT and Google OAuth modules |
| Email | Nodemailer |
| Payments | Stripe integration points |
| Frontend styling | CSS, Tailwind CSS and component libraries |
| Repository automation | GitHub Actions |

---

## 🌱 Platform Scope

AgroTech AI is organized into several independently maintained areas.

| Area | Directory | Responsibility |
|---|---|---|
| Primary browser application | `frontend/` | Main user experience, navigation, tools, shop and rental workflows |
| Application backend | `backend/` | Authentication, users, products, discussions, rentals, orders, email and related application routes |
| Quiz experience | `agro-quiz-app/` | Standalone Next.js quiz interface |
| Consolidated ML API | `agrotech-ai-apis/` | Flask endpoints for multiple agricultural and classification features |
| Additional API variant | `api/` | A separate collection of prediction and lookup endpoints |
| Legacy API variant | `agrotech-api`s/` | Legacy crop, fertilizer, irrigation, soil and price services |
| Disease services | `combined-disease-detection-api/`, `disease-prediction-api/`, `paddy-backend-api/`, `sugarcane-disease-api/` | Plant and crop disease prediction |
| Crop rotation | `crop-rotation-api/` | Crop rotation recommendation |
| Irrigation | `irrigation-api/` | Irrigation prediction |
| Mushroom classification | `mushroom-edibility/` | Mushroom edibility classification |
| Seed quality | `seed-qual-predictor/` | Seed quality prediction |
| Soil labs | `soil-testing-labs-api/` | Soil testing laboratory lookup |
| Electrical/electronics shops | `electrical-electronics-shops-api/` | Location-based shop lookup |
| Agricultural chatbot | `agrotech-ai-chatbot/` | Streamlit-based conversational assistant |

Some services overlap in their feature scope. Treat the API variants as separate implementations until a tested migration or consolidation is complete.

## ✨ Features

The repository contains implementations or integration points for the following capability groups. Availability and runtime requirements depend on the relevant service and its configuration.

### 🌾 Crop planning and recommendation
Crop recommendation and crop rotation models use agricultural input data to suggest crop options or rotations. Validate the supported input ranges and model labels in the service being used.

### 🦠 Plant and crop disease recognition
Dedicated APIs cover plant disease recognition and crop-specific workflows such as paddy and sugarcane prediction. Results depend on image quality, supported classes, preprocessing, and training data.

### 🌱 Soil, fertilizer and irrigation assistance
The repository contains soil-quality and fertilizer prediction models, irrigation-related services, and soil laboratory lookup workflows. These outputs must be checked against local field conditions and official guidance.

### 🌰 Seed and mushroom classification
Separate model services support seed quality prediction and mushroom edibility classification. Do not treat mushroom classification as a food-safety guarantee. Never consume a mushroom based only on a model result.

### 🛒 Agricultural commerce and equipment rental
The main frontend and backend include agriculture product shopping, user profiles, carts, wishlists, orders, rental workflows, ratings, rewards, seasonal pricing, and administration components.

### 💬 Community and AI assistance
The repository includes agricultural discussion and chatbot functionality, as well as Gemini and Groq integration points. Generated content should be checked for accuracy before acting on it.

### 📍 Agricultural lookup and market information
Dedicated services include soil testing laboratory and electrical/electronics shop lookup, along with price and commodity-related prediction endpoints in some API variants.

---

## 🏗️ Repository Architecture

The main application flow is:

```text
Browser
   |
   v
frontend/ (React + Vite)
   |
   v
backend/ (Node.js + Express)
   |                    |
   v                    v
MongoDB              External integrations
                       |-- Google OAuth
                       |-- Gemini
                       |-- SMTP / Nodemailer
                       `-- Stripe
   |
   +----> Specialist Flask / ML services
              |-- Crop and rotation
              |-- Disease recognition
              |-- Soil / fertilizer / irrigation
              |-- Seed / mushroom
              `-- Lookup / market endpoints

Optional independent applications:
   |-- agro-quiz-app/ (Next.js)
   `-- agrotech-ai-chatbot/ (Streamlit)
```

The frontend is configured with Vite and uses `VITE_BACKEND_BASE_URL` to find the application backend. The Express service registers modules from `backend/routes/` and connects to MongoDB using `MONGODB_URL`.

Model artifacts are loaded by the individual Python services. The artifacts are not interchangeable. A model must be paired with its own preprocessing, expected tensor or feature shape, label mapping, and compatible library versions.

For detailed service boundaries, see [Architecture](docs/architecture.md).

---

## 🧰 Technology Stack

| Technology | Role |
|---|---|
| React | Main browser UI |
| Vite | Frontend development and build tool |
| React Router | Client-side navigation |
| Tailwind CSS and CSS | Styling |
| Node.js | Backend runtime |
| Express | HTTP API and middleware |
| MongoDB | Application persistence |
| Mongoose | MongoDB object modeling |
| JWT / Passport | Authentication modules |
| Google OAuth | OAuth integration |
| Nodemailer | Email delivery |
| Stripe | Payment integration |
| Python / Flask | Specialist APIs |
| TensorFlow / TFLite | Neural network inference |
| scikit-learn | Classical ML models and preprocessing |
| pandas / NumPy | Data processing |
| Streamlit | Standalone chatbot interface |
| Next.js / TypeScript | Standalone quiz application |
| Docker Compose | Local orchestration |
| GitHub Actions | Repository automation |

---

## 💻 Prerequisites

For the primary application:

- Git
- Node.js 18 or a compatible newer LTS release
- npm
- Docker Desktop with Docker Compose
- Available local ports: 5173, 8080 and 27017, unless you change the Compose mappings

For Python services:

- Python version compatible with that service's requirements
- pip
- A separate virtual environment per service
- Additional system libraries where required by TensorFlow, image processing, or scientific packages

Check your tools:

```bash
git --version
node --version
npm --version
docker --version
docker compose version
python --version
```

The repository contains older ML environments and multiple Python dependency sets. Do not assume the newest Python version is compatible with every model service.

---

## 🚀 Quick Start with Docker

The root `Docker-compose.yml` defines the primary local stack: frontend, backend, and MongoDB.

From the repository root:

```bash
docker compose -f Docker-compose.yml config
docker compose -f Docker-compose.yml up --build
```

Default local mappings:

| Service | Local address |
|---|---|
| Frontend | [http://localhost:5173](http://localhost:5173) |
| Backend | [http://localhost:8080](http://localhost:8080) |
| MongoDB | `mongodb://localhost:27017` |

Check status and logs:

```bash
docker compose -f Docker-compose.yml ps
docker compose -f Docker-compose.yml logs --tail 100 backend frontend mongo
```

Stop containers without deleting the MongoDB volume:

```bash
docker compose -f Docker-compose.yml down
```

Delete local database data only when it is disposable:

```bash
docker compose -f Docker-compose.yml down -v
```

The final command removes the named MongoDB volume. It permanently deletes the local data stored there.

**Important:** this Compose file does not start every Flask service, the Streamlit chatbot, or the Next.js quiz application.

---

## 🧑‍💻 Local Frontend and Backend Setup

### 1. Configure local environment files

Create local copies from the examples:

**Windows PowerShell:**

```powershell
Copy-Item .env.example .env
Copy-Item backend\.env.sample backend\.env
Copy-Item frontend\.env.sample frontend\.env
```

Fill in only values needed for the services you intend to run. Do not commit local `.env` files.

The current sample files need a security review before use. In particular, remove any real-looking public access token from tracked examples, use the correct Vite variable names, and never use placeholder secrets as production values. See [SECURITY.md](SECURITY.md).

### 2. Start MongoDB

Use the root Compose configuration:

```bash
docker compose -f Docker-compose.yml up -d mongo
```

### 3. Start the backend

In a terminal:

```bash
cd backend
npm ci
npm run dev
```

The backend defaults to port 8080. It expects environment variables such as `MONGODB_URL`, `JWT_SECRET`, and provider credentials for enabled integrations.

### 4. Start the frontend

In another terminal:

```bash
cd frontend
npm ci
npm run dev
```

Vite normally serves the frontend on port 5173. Set `VITE_BACKEND_BASE_URL` in the frontend environment to the backend URL for the current environment. Restart Vite after changing environment variables.

### 5. Backend scripts

| Command | Purpose |
|---|---|
| `npm run dev` | Start backend through nodemon |
| `npm start` | Start backend with Node.js |
| `npm test` | Run the configured Jest test command |

### 6. Frontend scripts

| Command | Purpose |
|---|---|
| `npm run dev` | Start Vite development server |
| `npm run build` | Create production frontend bundle |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint |

---

## 🐍 Running Python Services

Each Flask service has its own `requirements.txt` and entrypoint. Create isolated environments rather than installing every service's dependencies into one environment.

Example for the consolidated API:

```powershell
cd agrotech-ai-apis
py -m venv .venv
.\.venv\Scripts\Activate.ps1
python -m pip install --upgrade pip
pip install -r requirements.txt
python app.py
```

Other services follow the same pattern, but check their `app.py`, configuration files, and model paths before starting. Some use a different launcher or expect local model artifacts.

### Streamlit chatbot

```powershell
cd agrotech-ai-chatbot
py -m venv .venv
.\.venv\Scripts\Activate.ps1
pip install -r requirements.txt
streamlit run src\main.py
```

### Next.js quiz application

```bash
cd agro-quiz-app
npm ci
npm run dev
```

Do not expose a specialist API publicly until its authentication, CORS, request validation, file-upload handling, and model resource limits have been reviewed.

---

## ⚙️ Environment Configuration

Configuration is service-specific. The root `.env.example` and service-local samples are starting points, not a complete or production-ready secret management solution.

Common environment names include:

| Variable | Used by | Purpose |
|---|---|---|
| `MONGODB_URL` | Backend | MongoDB connection string |
| `PORT` | Backend | HTTP listen port |
| `JWT_SECRET` | Backend | JWT signing secret |
| `GEMINI_API_KEY` | Backend AI route | Google Generative AI credential |
| `GOOGLE_CLIENT_ID` | Backend OAuth | Google OAuth client ID |
| `GOOGLE_CLIENT_SECRET` | Backend OAuth | Google OAuth client secret |
| `EMAIL_USER` | Backend mail | SMTP account identity |
| `EMAIL_PASS` | Backend mail | SMTP credential |
| `ENCRYPTION_SECRET_KEY` | Backend middleware | Encryption configuration |
| `VITE_BACKEND_BASE_URL` | Frontend | Backend base URL |
| `VITE_*` | Vite frontend | Browser-exposed build-time configuration |

Variables with a `VITE_` prefix are embedded into client-side frontend code. They must not contain private credentials. Public browser tokens still need provider restrictions, domain allowlists, quotas, and rotation procedures.

---

## 🔌 API Services

There is no single unified API contract across the repository. Multiple Flask applications implement overlapping capabilities and have different request schemas.

The root Express backend registers routes from `backend/routes/`, including authentication, users, shop, rental, discussions, agri-products, contact, and content-generation modules.

The Flask services cover endpoint families such as:

| Service area | Example capability |
|---|---|
| Crop recommendation | Crop recommendation from agricultural features |
| Crop rotation | Crop rotation suggestion |
| Disease recognition | Image-based crop disease classification |
| Soil quality | Soil classification or quality prediction |
| Fertilizer | Fertilizer recommendation |
| Irrigation | Irrigation-related prediction |
| Seed quality | Seed quality classification |
| Mushroom | Mushroom edibility classification |
| Location lookup | Soil lab and electrical/electronics shop lookup |
| Market | Price and commodity-related predictions |

Some consolidated API variants expose paths such as `/crop_recommendation`, `/crop_rotation`, `/disease_predict`, `/fertilizer_predict`, `/soil_quality_predict`, `/irrigation`, or lookup endpoints. Paths and methods differ by directory. Confirm the current implementation in the relevant `app.py` before integrating.

See [docs/api.md](docs/api.md) for the service directory and integration notes.

---

## 🧠 Data and Model Artifacts

The repository contains serialized artifacts in formats such as `.pkl`, `.h5`, and `.tflite`, along with CSV data files and label mappings.

These files require careful handling:

- A pickle/joblib artifact can execute code when loaded. Never load artifacts from untrusted sources.
- A model file depends on the exact preprocessing and feature order used during training.
- A classification model depends on its label encoder and class ordering.
- Image models depend on image dimensions, color channels, normalization, and supported classes.
- Library and runtime versions can affect compatibility and outputs.
- A model file in Git is not proof that its training data is licensed for redistribution.

For every model update, document the source dataset, training method, preprocessing steps, input schema, output labels, evaluation results, compatible runtime, and model version.

---

## 🧪 Testing and Quality Checks

Run the relevant checks from each service directory.

### Frontend

```bash
cd frontend
npm ci
npm run lint
npm run build
```

### Backend

```bash
cd backend
npm ci
npm test
```

The backend test command invokes Jest. Review the actual test suite and coverage before treating a passing command as broad API validation.

### Quiz application

```bash
cd agro-quiz-app
npm ci
npm run build
```

### Python APIs

Create a service-specific virtual environment, install its requirements, start the service, and run a health check or a sanitized smoke request. Test invalid payloads and image upload boundaries as well as valid requests.

### Manual review checklist

- [ ] Main frontend starts and routes render.
- [ ] Frontend points to the intended backend environment.
- [ ] Backend connects to MongoDB.
- [ ] Authentication and authorization are tested with non-production accounts.
- [ ] Role-restricted admin routes reject unauthorized users.
- [ ] Email and payment integrations use test credentials.
- [ ] Each enabled ML API loads its intended model artifact.
- [ ] Valid and invalid requests return safe responses.
- [ ] Uploaded files are validated and bounded.
- [ ] Logs do not contain credentials or personal data.
- [ ] Production builds do not expose server secrets.

---

## 🔐 Security

Security review is required before public deployment. The inspected source contains problems that should be treated as priority remediation items:

1. **Hard-coded Express session secret:** `backend/index.js` currently configures a literal session secret. Replace it with a high-entropy environment secret, rotate sessions, and configure secure cookie settings.
2. **Tracked Groq credential configuration:** `api/app.py` loads the Groq key from a tracked `config.json`. Move the credential to a secret environment variable and rotate the existing key if it was ever real.
3. **Frontend token in example file:** `frontend/.env.sample` contains a Mapbox-looking public token. Verify ownership and scope, rotate if necessary, and keep only intentionally public restricted tokens in the sample.
4. **Weak sample JWT value:** `backend/.env.sample` currently sets `JWT_SECRET=secret`. Replace this with an empty placeholder and generate a unique secret per environment.
5. **Open CORS configuration:** some Flask APIs allow all origins. Restrict origins to known frontend domains for deployment.
6. **Verbose error responses:** inspect API handlers to ensure provider and server exceptions are not sent directly to public clients.
7. **Incomplete route implementation:** `backend/routes/users.js` includes an incomplete `router.get('/users/:id', )` registration. Validate route loading and automated tests before deployment.
8. **Untracked-log hygiene:** `backend/logs/error.log` is tracked. Confirm it contains no sensitive values, remove runtime logs from Git, and rotate exposed credentials as necessary.

### Immediate security actions

- Rotate any credential that has been committed or placed in tracked config.
- Review Git history, Actions logs, build artifacts, and deployment variables.
- Move secrets to environment variables or a secret manager.
- Restrict CORS and database network access.
- Set authentication, authorization, request-size, and rate limits.
- Validate file uploads by type, size, and content.
- Avoid exposing pickle loading or debug endpoints to untrusted users.
- Never commit production database exports or user uploads.

See [SECURITY.md](SECURITY.md). Removing a secret from the latest commit does not invalidate it; revoke or rotate the credential with its provider.

---

## 🛡️ Privacy and Responsible AI

The platform can process account details, contact messages, locations, uploaded crop images, discussions, product orders, and rental workflows. Treat these data categories as potentially sensitive.

- Collect only data required for a feature.
- Explain why information is collected and which external provider receives it.
- Avoid storing full prompts, tokens, or raw uploads in logs unless there is a documented need and retention policy.
- Define retention and deletion procedures for images, messages, and account data.
- Use synthetic data in issues, tests, and screenshots.
- Verify that any third-party model or geocoding provider is permitted to process the submitted data.
- Make uncertainty visible in agricultural recommendations.
- Do not use model predictions as the sole basis for pesticide, fertilizer, irrigation, food-safety, or plant-disease decisions.

---

## 🚀 Deployment

The repository contains Dockerfiles and multiple service-specific deployment configurations. Deployment must be performed per service, not assumed from the monorepo root.

### Primary application

For a production design, separate the frontend, Express backend, and MongoDB into independently configured services. Use a managed database, TLS, a reverse proxy or gateway, health checks, and a secret manager.

### Specialist APIs

Deploy only required model APIs. Verify that the hosting platform supports the required Python version, native libraries, model file sizes, memory, cold-start behavior, and request duration. Large models may be unsuitable for serverless limits.

### Release checklist

- [ ] Exposed credentials rotated.
- [ ] Production secrets configured outside the repository.
- [ ] Database backups and restore process tested.
- [ ] CORS and network access restricted.
- [ ] Authentication and role permissions reviewed.
- [ ] Model artifact/runtime compatibility verified.
- [ ] Health checks, structured logs, and alerts configured.
- [ ] Smoke tests pass in the deployment environment.
- [ ] Rollback path documented.
- [ ] Privacy and data retention reviewed.

See [docs/deployment.md](docs/deployment.md).

---

## 🧯 Troubleshooting

| Symptom | Check |
|---|---|
| Frontend cannot reach backend | `VITE_BACKEND_BASE_URL`, backend process, CORS and browser network logs |
| MongoDB connection fails | `MONGODB_URL`, Docker service name, container logs, network and credentials |
| npm install fails | Node/npm version, lockfile, registry connectivity |
| Python package install fails | Use an isolated compatible Python version and service-local requirements |
| Model fails to load | Artifact path, model/library compatibility, file integrity |
| Prediction request errors | Request schema, feature order, image size/type, preprocessing and logs |
| Vercel build fails | Correct project root, runtime support, included model files, memory and timeout |
| OAuth callback fails | Authorized redirect URI, client ID, client secret and session configuration |
| Email is not sent | SMTP credentials, provider restrictions, sender identity and server logs |

See [docs/troubleshooting.md](docs/troubleshooting.md).

---

## 🤝 Contributing

Contributions are welcome across frontend usability, backend reliability, model quality, security, documentation, and agricultural workflows.

Before submitting a change:

1. Read [CONTRIBUTING.md](CONTRIBUTING.md) and [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md).
2. Identify the service that owns the behavior.
3. Keep the change focused.
4. Add or update tests for the affected service.
5. Validate a clean build or smoke test.
6. Update API and configuration documentation.
7. Do not include credentials, personal data, generated caches, or unexplained large artifacts.
8. State limitations of any model or generated recommendation.

---

## 🗺️ Roadmap

Candidate improvements, not claims of existing implementation:

- [ ] Consolidate duplicate and legacy Flask API variants.
- [ ] Establish a versioned API gateway and OpenAPI definitions.
- [ ] Remove embedded credentials and rotate any exposed keys.
- [ ] Repair incomplete backend routes and strengthen test coverage.
- [ ] Add CI checks for frontend builds, backend tests, and Python service smoke tests.
- [ ] Add model cards, dataset provenance, and evaluation reports.
- [ ] Establish a secure upload lifecycle and file retention policy.
- [ ] Improve observability and production health checks.
- [ ] Standardize authentication, CORS, request validation, and error handling.
- [ ] Improve mobile, low-bandwidth, and accessible farmer workflows.

---

## 📖 Documentation

| Document | Description |
|---|---|
| [Documentation home](docs/README.md) | Navigation and contributor reading paths |
| [Service catalog](docs/service-catalog.md) | Directory-by-directory guide to every application and API service |
| [Architecture](docs/architecture.md) | Main application and specialist service boundaries |
| [API overview](docs/api.md) | Endpoint families and integration guidance |
| [Database](docs/database.md) | MongoDB and data handling |
| [Installation](docs/installation.md) | Local setup for primary and optional services |
| [Development](docs/development.md) | Development and validation standards |
| [Deployment](docs/deployment.md) | Deployment principles and release checklist |
| [Troubleshooting](docs/troubleshooting.md) | Common local and deployment issues |
| [FAQ](docs/faq.md) | Common project questions |
| [Security](SECURITY.md) | Vulnerability reporting and security priorities |
| [Contributing](CONTRIBUTING.md) | Contribution workflow |
| [Code of Conduct](CODE_OF_CONDUCT.md) | Community participation |
| [Support](SUPPORT.md) | Project support guidance |
| [Roadmap](ROADMAP.md) | Future priorities |
| [Changelog](CHANGELOG.md) | Project change history |
| [Citation](CITATION.cff) | Citation metadata |
| [Configuration](docs/configuration.md) | Environment variables and secret handling |
| [Models and data](docs/models.md) | Model artifacts, provenance, evaluation, and limitations |
| [Model card template](docs/model-card-template.md) | Standard documentation template for ML models |
| [Privacy](docs/privacy.md) | Data minimization, retention, and third-party processing |
| [Testing](docs/testing.md) | Build, test, and smoke-check commands |
| [GitHub workflows](docs/workflows.md) | CI, automation, permissions, and Dependabot |
| [Maintenance](docs/maintenance.md) | Routine upkeep and known repository hygiene issues |
| [Release process](docs/release-process.md) | Validation, tagging, deployment, and rollback |
| [Frontend service guide](frontend/README.md) | Main React/Vite application |
| [Backend service guide](backend/README.md) | Express API and MongoDB integration |
| [Python API service guides](api/README.md) | Service-specific API documentation |

---

## 📄 License

This repository includes the **MIT License**. See [LICENSE](LICENSE) for the complete terms.

Copyright (c) 2026 Brajesh31.

The repository license does not automatically change the licensing or usage terms of third-party dependencies, datasets, pretrained models, images, provider APIs, or other external materials. Verify the applicable terms before redistribution or commercial use.

---

<p align="center"><strong>Building practical agricultural technology with data, software, and responsible AI.</strong></p>

Last updated: 2026-11-16 01:43 UTC
