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

The repository previously tracked Python bytecode cache files under `mushroom-edibility/data/__pycache__/` and `paddy-backend-api/__pycache__/`, plus an empty runtime log. Those generated files have now been removed from the current branch, and the root `.gitignore` excludes Python caches and runtime logs.

## Empty irrigation placeholders

`irrigation-api/app.py` remains empty. Its requirements file now lists the dependencies for the training script, but the directory still does not define a working Flask inference API. Keep this limitation visible until an API implementation and tests are added.

## Large model files

Model binaries are large and duplicated in multiple service folders. Before adding or replacing artifacts:
- Verify ownership, license, and source.
- Record SHA-256 checksums.
- Document preprocessing and compatibility.
- Confirm the deployment platform can package and load the artifact.
- Consider a model registry or release asset for future versions.

## Avoid destructive cleanup

Do not delete datasets, model artifacts, images, or old API variants until their usage is traced through imports, frontend URLs, and deployment configuration.
