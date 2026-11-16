# 🔐 Security Policy

## Scope

AgroTech AI contains a browser application, a Node.js/Express backend, MongoDB models, multiple Python APIs, model artifacts, and optional applications. Security reports may concern credentials, authentication, authorization, uploads, model loading, dependencies, personal data, or deployment configuration.

## Reporting a vulnerability

Do not publish exploitable vulnerabilities in public issues. Contact the repository owner privately through GitHub's available security reporting or contact controls.

Include:
- A concise description and affected service or file.
- The affected commit or deployment, if known.
- Reproduction steps or a minimal proof of concept.
- The potential impact.
- Suggested mitigation, if available.

Do not include passwords, private keys, tokens, real user records, or confidential images in a report.

## Response expectations

Reports will be reviewed in good faith. Maintainers will investigate and coordinate fixes or mitigations where practicable. A public advisory may be published after a fix is available. Reporter attribution requires permission.

## Immediate remediation priorities

The inspected source has security concerns that should be addressed before public production deployment:

1. The hard-coded Express session secret has been removed. The backend now requires a unique `SESSION_SECRET` in production and sets HTTP-only, secure-in-production, same-site cookies.
2. Groq credentials were previously stored in tracked JSON configuration files in `api/` and `agrotech-ai-chatbot/`, and a Google API key was present in `agrotech-ai-apis/.env-sample`. The current versions use environment variables and empty samples. Rotate every exposed credential because Git history may still contain the original values.
3. `frontend/.env.sample` previously included a Mapbox-looking access token. Verify ownership and scope; rotate it if necessary. Keep only intentionally public, restricted tokens in frontend configuration.
4. `backend/.env.sample` previously supplied a weak JWT placeholder. Use an empty sample and generate a unique secret per environment.
5. The Express backend now uses the `FRONTEND_ORIGIN` allowlist. Several Flask APIs still configure permissive CORS and must be restricted before deployment.
6. Review exception handlers for responses that may expose provider or server details.
7. The incomplete user profile GET route has been connected to JWT authentication and a safe field projection. The frontend token handling and profile update path still need integration testing.
8. `backend/logs/error.log` is tracked in the inspected tree. Review for sensitive content, remove runtime logs from source control, and rotate any exposed credentials.

## Security requirements

- Revoke and rotate committed real credentials. Removing a key from the latest revision does not invalidate it.
- Keep private keys and tokens out of source, notebooks, images, logs, issues, and pull requests.
- Restrict CORS, database network access, and administrative endpoints.
- Validate authentication and authorization on every protected action.
- Validate uploaded file type, size, and content.
- Use secure cookies and HTTPS in deployed environments.
- Avoid exposing debug tracebacks.
- Review dependencies and model artifacts before loading or executing them.
- Treat pickle/joblib files as executable content and load only trusted artifacts.
- Define retention and deletion policies for personal data and uploaded files.

## Data and model safety

Never commit production database exports, private user records, provider credentials, or unreviewed model files. Keep dataset provenance, model version, preprocessing, and compatible library versions documented.
