# Database

## Current database

The primary application backend uses MongoDB through Mongoose. The root Compose file starts MongoDB 6 and persists data in the named `mongo-data` volume:

```text
mongodb://localhost:27017
```

The database name and credentials are configured through the backend environment. Review the backend connection code and `MONGODB_URL` before deploying.

## Local lifecycle

Start the database with the primary stack:

```powershell
docker compose -f Docker-compose.yml up mongo
```

Stop it without deleting data:

```powershell
docker compose -f Docker-compose.yml down
```

Delete local data only when it is disposable:

```powershell
docker compose -f Docker-compose.yml down -v
```

## Application data

Mongoose models and controllers are the source of truth for the current schema. The repository should add explicit migration or compatibility procedures before changing production collections. Avoid treating a development database reset as a migration.

## Production guidance

- Use a managed MongoDB deployment with TLS, authentication, backups, and network restrictions.
- Store the connection string in a secret manager.
- Use a least-privilege database user per environment.
- Create indexes deliberately and measure query performance.
- Set connection, socket, and server-selection timeouts.
- Define retention rules for uploaded images, messages, logs, and personal data.
- Test restore procedures and document recovery point and recovery time objectives.

## Privacy

Location, contact, account, uploaded image, and agricultural data may be sensitive. Collect only what the feature needs, document its purpose, restrict access, and avoid copying production data into local environments. Scrub personal data from support requests and fixtures.

## Model data

Most specialist services load local model artifacts and may use CSV metadata or external APIs rather than MongoDB. Treat those files as versioned inputs with provenance and integrity checks. Do not store generated uploads or runtime caches in Git.
