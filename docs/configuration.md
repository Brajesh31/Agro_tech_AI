# ⚙️ Configuration Reference

Configuration is per service. The repository does not have one shared runtime configuration file for every application.

## Primary Express backend

Create `backend/.env` locally from `backend/.env.sample`. Common variables include:

| Variable | Purpose |
|---|---|
| `PORT` | Backend HTTP port, defaults to 8080 |
| `NODE_ENV` | Runtime environment |
| `MONGODB_URL` | MongoDB connection string |
| `JWT_SECRET` | JWT signing key |
| `SESSION_SECRET` | Express session signing key, required after hard-coded value is removed |
| `GEMINI_API_KEY` | Google Gemini integration |
| `GOOGLE_CLIENT_ID` / `GOOGLE_CLIENT_SECRET` | Google OAuth |
| `EMAIL_USER` / `EMAIL_PASS` | Email provider credentials |
| `ENCRYPTION_SECRET_KEY` | Encryption middleware key |
| `STRIPE_SECRET_KEY` | Stripe server-side integration |
| `STRIPE_WEBHOOK_SECRET` | Stripe webhook verification |

Confirm the exact names read by each controller and service. Some legacy modules may use different variable names.

## Frontend

Create `frontend/.env` from `frontend/.env.sample`.

- `VITE_BACKEND_BASE_URL` identifies the backend.
- `VITE_MAPBOX_ACCESS_TOKEN` is a browser-exposed token. Restrict it by allowed origins and scopes.

Vite embeds `VITE_*` values in client assets. Never put private API keys, database credentials, JWT secrets, or SMTP passwords in frontend variables.

## Python services

Python APIs use different provider variables. The consolidated APIs use `GOOGLE_API_KEY` for Gemini and `GROQ_API_KEY` for Groq integrations. The standalone chatbot also uses `GROQ_API_KEY`. Inspect the selected service source and its sample before running it.

Do not store real provider keys in tracked `config.json` files. Move them to environment variables or a secret manager and rotate credentials that were previously committed.

## Local environment file policy

- Commit only empty examples and explanatory comments.
- Keep real `.env` files untracked.
- Use separate credentials for development, staging, and production.
- Generate high-entropy random secrets.
- Rotate exposed credentials at the provider.
- Keep logs and screenshots free of secrets.

See [SECURITY.md](../SECURITY.md) for remediation requirements.
