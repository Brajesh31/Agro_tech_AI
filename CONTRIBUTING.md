# Contributing to AgroTech AI

Thank you for helping improve AgroTech AI. Contributions are welcome across the web application, backend, machine-learning APIs, documentation, tests, and developer experience.

## Before you start

1. Read the [Code of Conduct](CODE_OF_CONDUCT.md).
2. For security vulnerabilities, do **not** open a public issue; follow [SECURITY.md](SECURITY.md).
3. Search existing issues and pull requests before opening a new one.
4. Keep changes focused on one feature, bug, service, or documentation goal.

## Development setup

The supported primary development path is the Docker Compose stack:

```powershell
docker compose -f Docker-compose.yml up --build
```

For local development without Docker, follow [docs/installation.md](docs/installation.md). Use the package manager lockfile when one is present (`npm ci`), and use an isolated Python virtual environment for every Python service.

## Branches and commits

- Branch from `main`.
- Use a descriptive branch name such as `fix/frontend-api-url` or `docs/api-reference`.
- Keep commits small and logically grouped.
- Use imperative commit subjects, for example `Document Python service endpoints`.
- Do not commit `.env` files, API keys, credentials, private datasets, generated caches, or large build artifacts.

## Making a change

1. Reproduce the problem or describe the intended behavior.
2. Make the smallest complete change that solves it.
3. Update directly related documentation and examples.
4. Add or update tests when behavior changes.
5. Run the checks relevant to the directories you touched.
6. Review the final diff for secrets, debug output, generated files, and unrelated changes.

Useful checks include:

```powershell
Set-Location frontend; npm ci; npm run lint; npm run build
Set-Location ..\backend; npm ci; npm test
Set-Location ..\agro-quiz-app; npm ci; npm run build
```

For Python services, at minimum import the application or start it locally and exercise its health endpoint. Add focused tests when the service has test coverage.

## Pull requests

A pull request should explain:

- What changed and why.
- Which service(s) are affected.
- How the change was tested.
- Any configuration, migration, model, or deployment considerations.
- Any known limitations or follow-up work.

Use the pull request template and link related issues. Keep screenshots or request/response examples small and free of personal data or secrets.

## Machine-learning contributions

When changing a model or prediction pipeline, document the model source, expected input shape, preprocessing, evaluation data, metrics, known limitations, and compatibility requirements. Never claim a model is safe for agricultural, health, or financial decisions without appropriate validation.

## Documentation contributions

Documentation should be written for a new contributor. Include prerequisites, exact commands, expected output or URLs, and links to the source of truth. If an instruction differs between services, say so explicitly.
