# 🤖 AgroTech AI Chatbot API

This directory contains a Flask-based agricultural chatbot API that uses the Groq client for generated responses and includes predefined answers for common AgroTech AI questions. It is a standalone service, separate from the primary Express backend.

## Requirements

- Python 3.9 or a compatible version supported by the selected Flask/Groq packages
- pip
- A Groq API key for generated responses

## Setup

```powershell
py -m venv .venv
.\.venv\Scripts\Activate.ps1
python -m pip install --upgrade pip
pip install -r requirements.txt
Copy-Item .env.sample .env
```

Set `GROQ_API_KEY` in the local `.env` file or deployment environment. Never add real credentials to `src/config.json`, source code, or Git.

## Run

From this directory:

```powershell
python src\main.py
```

The Flask development server defaults to port 5000. Do not use the development server in production. Use a production WSGI server and configure TLS, authentication as required, request limits, and explicit CORS origins.

## API

The service exposes `POST /AgroTech-ChatBot`. The request body is JSON with a `prompt` field. Several predefined prompts can be answered without calling Groq. Other prompts require `GROQ_API_KEY`; when it is not configured, the service responds with HTTP 503.

The current implementation applies an in-memory per-IP rate limit. This is process-local and is not a substitute for a distributed production rate limiter.

## Security and privacy

- Do not log API keys or private conversations.
- Restrict CORS to the intended frontend origins.
- Validate JSON bodies and prompt length.
- Use a managed secret store in deployment.
- Review provider data handling before sending user prompts.
- Treat generated agricultural content as informational, not authoritative agronomic advice.

See the repository [security policy](../SECURITY.md) and [API guide](../docs/api.md).
