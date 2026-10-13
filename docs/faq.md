# Frequently asked questions

## Is this one application or several?

It is a monorepo containing a primary React/Express/MongoDB application plus independent Flask, Streamlit, and Next.js services. The root Compose file starts only the primary frontend, backend, and MongoDB services.

## Which service should I run first?

For the main product workflow, start the root Compose stack. Run a specialist Python service only when you are working on that model or endpoint.

## Can I use one Python environment for all APIs?

No. Several services pin conflicting versions of Flask, NumPy, TensorFlow, PyTorch, and related packages. Use one virtual environment or container per service.

## Are model predictions authoritative?

No. They are decision-support outputs and may be wrong outside their training data or local conditions. Consult qualified agricultural experts for consequential decisions.

## Where do I put API keys?

In local environment files or a managed secret store. Never put a real key in source, JSON configuration, documentation, screenshots, issues, or pull requests. See [SECURITY.md](../SECURITY.md).

## Why are there multiple similar APIs?

The repository has consolidated and legacy variants that evolved at different times. Verify which deployment the frontend or environment uses before changing an endpoint. Consolidation is a roadmap item.

## How do I report a bug?

Use the GitHub bug report template and include the service, commit, command, environment, expected behavior, actual behavior, and sanitized logs. Use the private security process for vulnerabilities.

## How do I contribute?

Read [CONTRIBUTING.md](../CONTRIBUTING.md), create a focused branch, make a small tested change, update related documentation, and open a pull request.

## How do I delete local MongoDB data?

Run `docker compose -f Docker-compose.yml down -v`. This permanently deletes the local named volume, so use it only for disposable development data.
