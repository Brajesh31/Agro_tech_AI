# 🤝 Contributing to AgroTech AI

Contributions are welcome across frontend usability, backend reliability, agricultural workflows, machine-learning quality, security, and documentation.

## Before you start

1. Read the main [README](README.md) and [documentation index](docs/README.md).
2. Check existing issues and pull requests.
3. Identify the service that owns the behavior.
4. Review the service's dependencies and runtime requirements.
5. Never commit credentials, private user records, production database exports, or unreviewed uploads.

## Development setup

For the primary application, follow [docs/installation.md](docs/installation.md). Use npm lockfiles and service-specific Python environments.

## Repository structure expectations

- Keep React/Vite code in `frontend/`.
- Keep Express routes, controllers, models, and services in `backend/`.
- Keep quiz UI changes in `agro-quiz-app/`.
- Keep Python API changes in the specific service directory.
- Do not add unrelated service dependencies to a shared/global environment.
- Keep secrets in local environment files or managed secret stores.

## API contribution standards

- Validate request fields and types at the boundary.
- Document methods, route paths, required fields, and response examples.
- Return consistent error responses.
- Enforce appropriate authentication and role authorization.
- Restrict CORS to expected frontend origins in deployed environments.
- Validate uploaded file size, format, and decoded content.
- Avoid sending raw exception details to public clients.
- Add request timeouts for external provider calls.

## Machine-learning contribution standards

For any model or preprocessing change, document:
- Dataset source, provenance, and license.
- Feature schema, units, image size, and preprocessing.
- Model artifact and label mapping versions.
- Python and library compatibility.
- Evaluation split and metrics, including class-level metrics where relevant.
- Known limitations and unsupported inputs.

Do not present generated predictions as guaranteed agronomic advice, disease diagnosis, or food-safety determinations.

## Validation

Run checks in the affected service.

Frontend:

```bash
cd frontend
npm ci
npm run lint
npm run build
```

Backend:

```bash
cd backend
npm ci
npm test
```

Quiz application:

```bash
cd agro-quiz-app
npm ci
npm run build
```

Python: create a fresh virtual environment in the service directory, install its requirements, start the service, and run smoke tests for valid and invalid requests.

## Pull request checklist

- [ ] The change addresses one focused problem.
- [ ] Relevant lint, build, test, or smoke checks pass.
- [ ] Documentation and environment samples are updated.
- [ ] No credentials, personal data, runtime logs, caches, or accidental large files are included.
- [ ] API and model behavior changes are explained.
- [ ] Security, privacy, and agricultural safety implications are considered.

## Reporting

Use the issue templates for bugs, features, and documentation. Report security vulnerabilities privately according to [SECURITY.md](SECURITY.md).
