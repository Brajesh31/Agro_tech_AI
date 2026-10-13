# AgroTech AI Chatbot

This directory contains the Streamlit agricultural chatbot. The chatbot provides conversational assistance through the Groq client and is separate from the Flask APIs and the main web application.

## Requirements

- Python 3
- A Groq API key
- The packages pinned in [`requirements.txt`](requirements.txt)

## Setup

```powershell
py -m venv .venv
.\.venv\Scripts\Activate.ps1
python -m pip install --upgrade pip
pip install -r requirements.txt
```

Configure the provider credential through a local secret mechanism. The application currently reads its configuration from `src/config.json`; do not put a real key in a committed file. Prefer migrating local and deployment configuration to an environment variable such as `GROQ_API_KEY`.

## Run

```powershell
streamlit run src\main.py
```

Streamlit normally opens <http://localhost:8501>.

## Development notes

- Keep prompts and response handling resilient to provider errors and rate limits.
- Do not log API keys, user conversations, or personal information.
- Treat generated advice as informational and direct users to qualified agricultural experts for consequential decisions.
- Add sanitized fixtures and provider-mocked tests before changing conversation behavior.

See the repository-level [`CONTRIBUTING.md`](../CONTRIBUTING.md) and [`SECURITY.md`](../SECURITY.md) for contribution and security requirements.
