# 🧰 Repository Maintenance

## Routine checks

### Every change
- Run checks for the service that changed.
- Review environment samples for accidental credentials.
- Check diffs for generated files, logs, and large binaries.
- Update API and model documentation when behavior changes.

### Monthly
- Review npm and Python dependency alerts.
- Review GitHub Actions versions and permissions.
- Check model artifact provenance and file integrity.
- Review stale documentation and broken links.
- Verify backups and restore procedures for production data.

### Before a release
- Run the relevant builds, tests, and smoke checks.
- Rotate credentials that may have been exposed.
- Verify CORS, authentication, authorization, uploads, and error handling.
- Confirm model/runtime compatibility.
- Prepare rollback notes.

## Repository hygiene findings

The inspected tree currently includes Python bytecode cache files under `mushroom-edibility/data/__pycache__/` and `paddy-backend-api/__pycache__/`. These should not be versioned. The root `.gitignore` now ignores Python caches, but already tracked files must be removed from Git separately.

The tree also contains a zero-byte `backend/logs/error.log`, which should be treated as runtime output and not committed.

## Empty irrigation placeholders

`irrigation-api/app.py` and `irrigation-api/requirements.txt` are empty. The directory contains a training script and model artifacts, but does not currently define a working Flask API. Keep this limitation visible until an API implementation and tests are added.

## Large model files

Model binaries are large and duplicated in multiple service folders. Before adding or replacing artifacts:
- Verify ownership, license, and source.
- Record SHA-256 checksums.
- Document preprocessing and compatibility.
- Confirm the deployment platform can package and load the artifact.
- Consider a model registry or release asset for future versions.

## Avoid destructive cleanup

Do not delete datasets, model artifacts, images, or old API variants until their usage is traced through imports, frontend URLs, and deployment configuration.
