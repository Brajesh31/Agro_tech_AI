# 📚 AgroTech AI Documentation

This documentation describes the multi-service AgroTech AI repository. Start with the main [README](../README.md) for the overview and quick start.

## Documentation map

| Guide | Purpose |
|---|---|
| [Architecture](architecture.md) | Main app, backend, database, and specialist service boundaries |
| [Service catalog](service-catalog.md) | Directory-by-directory service map and local guides |
| [Configuration](configuration.md) | Environment variables and secret handling |
| [Models and data](models.md) | Model artifacts, provenance, evaluation, and limitations |
| [Model card template](model-card-template.md) | Standard documentation template for ML models |
| [Privacy](privacy.md) | Data minimization, retention, and third-party processing |
| [Testing](testing.md) | Build, test, and smoke-check commands |
| [GitHub workflows](workflows.md) | CI, automation, permissions, and Dependabot |
| [Maintenance](maintenance.md) | Routine upkeep and known repository hygiene issues |
| [Release process](release-process.md) | Validation, tagging, deployment, and rollback |
| [API overview](api.md) | Endpoint families, request handling, and integration expectations |
| [Database](database.md) | MongoDB, data handling, and privacy |
| [Deployment](deployment.md) | Local containers, service-specific hosting, and release checks |
| [Development](development.md) | Contribution workflow, tests, and model standards |
| [FAQ](faq.md) | Common setup and project questions |
| [Installation](installation.md) | Local setup for Node.js, Python, and optional apps |
| [Troubleshooting](troubleshooting.md) | Common errors and fixes |

## Recommended reading

### First-time setup
1. Read the [main README](../README.md).
2. Follow [installation](installation.md).
3. Start the primary Docker Compose stack.
4. Review [architecture](architecture.md) to understand which services run independently.

### Frontend or backend contributions
1. Review [architecture](architecture.md).
2. Follow [development](development.md).
3. Read [contribution guidelines](../CONTRIBUTING.md).
4. Run service-specific validation and update API documentation.

### Machine-learning service contributions
1. Identify the exact service directory.
2. Review the endpoint in [API overview](api.md).
3. Verify model file, preprocessing, feature schema, and labels.
4. Follow model validation and responsible-use standards in [development](development.md).

### Deployment
Read [deployment](deployment.md) and [security](../SECURITY.md) before exposing any service publicly.

## Security note

The inspected source has credentials and permissive settings requiring review. Rotate any committed real keys, keep private credentials out of tracked files, and restrict public network access before production deployment.
