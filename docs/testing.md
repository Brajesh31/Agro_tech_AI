# 🧪 Testing and Validation

Testing is service-specific because this repository contains several runtimes and independent dependency sets.

## Frontend

From `frontend/`:

```bash
npm ci
npm run lint
npm run build
```

## Express backend

From `backend/`:

```bash
npm ci
npm test
```

The current test script invokes Jest. Review `backend/test/` to understand the actual test coverage. A successful Jest command does not imply every route, role, or external integration is covered.

## Quiz application

From `agro-quiz-app/`:

```bash
npm ci
npm run build
```

## Python syntax checks

From the repository root, Python syntax can be checked without installing every service's dependencies:

```bash
python -m compileall -q api agrotech-ai-apis agrotech-api\`s combined-disease-detection-api crop-rotation-api disease-prediction-api electrical-electronics-shops-api irrigation-api mushroom-edibility paddy-backend-api seed-qual-predictor soil-testing-labs-api sugarcane-disease-api
```

The command may need shell-specific quoting for the legacy folder containing a backtick in its name. Run service checks individually if necessary.

## Python service tests

For each API:
1. Create a dedicated virtual environment.
2. Install that service's requirements.
3. Start its documented entrypoint.
4. Call its health endpoint where available.
5. Test valid and invalid JSON/form payloads.
6. Test image size, type, decoding, and missing-file cases.
7. Verify safe errors and cleanup of temporary files.

## Model evaluation

Do not treat a successful model load as proof of quality. Validate dataset provenance, preprocessing, class labels, feature order, model/library compatibility, representative test data, and class-level evaluation metrics.

## Before merging

- [ ] Relevant build and lint commands pass.
- [ ] Backend tests pass.
- [ ] Python syntax and smoke checks pass for changed services.
- [ ] Documentation and environment examples are updated.
- [ ] No secrets, private data, runtime logs, bytecode, or accidental binary artifacts are included.
