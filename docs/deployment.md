# Deployment

Deployment is service-specific. The repository currently supports a Docker Compose development stack and includes Vercel configuration for selected services. Treat production deployment as an explicit architecture decision.

## Production principles

- Deploy only the services required for the environment.
- Use managed secrets and rotate credentials before deployment.
- Put public APIs behind TLS, authentication where appropriate, rate limits, and request-size limits.
- Use private connectivity for MongoDB and internal model services where possible.
- Pin runtime and dependency versions; build from lockfiles.
- Add health checks, structured logs, metrics, alerts, backups, and rollback procedures.
- Do not use development servers (`vite`, `nodemon`, Flask debug mode) as production servers.

## Docker Compose

Compose is intended for local development and demonstrations:

```powershell
docker compose -f Docker-compose.yml up --build
```

The current Dockerfiles start development commands and should be reviewed before production use. Use a production build and a process manager appropriate to the target platform.

## Vercel

`frontend/vercel.json`, `backend/vercel.json`, `backend/vercel.json`, `api`-variant configuration, and selected Python services describe Vercel deployments. Deploy each directory as its own project and configure environment variables in the Vercel project settings. Do not assume the root repository is a single Vercel project.

Before deploying:

1. Confirm the entrypoint and required model files are included.
2. Confirm the platform supports the runtime and native ML dependencies.
3. Configure the frontend backend URL for the target environment.
4. Test cold starts, file upload limits, request timeouts, and memory use.

## Container or cloud deployment

For a managed deployment, separate:

- The frontend static or server-rendered application.
- The Express backend.
- MongoDB or a managed MongoDB-compatible service.
- Specialist model APIs, sized for model memory and inference latency.
- Background workers and scheduled jobs.

Use a registry, vulnerability scan, non-root containers, health probes, autoscaling limits, and a deployment identity with least privilege.

## Release checklist

- [ ] Dependencies and base images are current and scanned.
- [ ] Secrets are configured outside the image and repository.
- [ ] Database backup and migration/rollback plan is tested.
- [ ] Health checks and alerts are active.
- [ ] API contracts and frontend URLs match.
- [ ] Model artifacts and runtime compatibility are verified.
- [ ] A smoke test has been run in the target environment.
- [ ] Logs do not contain credentials or sensitive user data.
