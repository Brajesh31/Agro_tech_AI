# Development

## Repository conventions

Keep service-specific code, dependencies, models, and documentation inside the owning directory. Avoid adding a dependency to the root when only one service needs it.

- JavaScript/TypeScript: follow the existing ESLint and package scripts.
- Python: use an isolated virtual environment and the local requirements file.
- Configuration: environment variables and secret stores only.
- API changes: update `docs/api.md` and include a request/response example.
- Model changes: document preprocessing, expected inputs, labels, evaluation data, and limitations.

## Branch and commit workflow

Create a focused branch from `main`:

```powershell
git switch main
git pull --ff-only
git switch -c feat/short-description
```

Keep commits logically grouped and use imperative subjects. Do not mix a model change, dependency upgrade, unrelated formatting, and documentation cleanup in one commit.

## Validation commands

Run only the checks relevant to changed services:

```powershell
Set-Location frontend
npm ci
npm run lint
npm run build
```

```powershell
Set-Location ..\backend
npm ci
npm test
```

```powershell
Set-Location ..\agro-quiz-app
npm ci
npm run build
```

For Python services, start the service and call its health endpoint where one exists. For image/model services, test both a valid request and invalid input. Add automated tests rather than relying only on a manual browser check.

## API design

- Keep endpoint names and methods stable once consumed by the frontend.
- Validate input shape, file type, size, and required fields at the boundary.
- Return consistent JSON errors without leaking stack traces or secrets.
- Set explicit CORS origins for deployed environments.
- Add timeouts and retries only where they are safe and observable.
- Avoid logging uploaded images, tokens, or personally identifying data.

## Machine-learning development

Record the model artifact version and preprocessing assumptions with every change. Evaluate against a fixed dataset and report class-level performance, not only a single aggregate score. Treat predictions as advisory and document cases where expert review is required.

## Pull request checklist

- [ ] The change is scoped to the stated problem.
- [ ] Relevant tests, builds, or smoke checks pass.
- [ ] Documentation and configuration examples are updated.
- [ ] No secrets, private data, generated caches, or large accidental files are included.
- [ ] API and model behavior changes are called out in the pull request.
