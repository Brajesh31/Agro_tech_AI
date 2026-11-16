# 🚢 Release Process

This document describes a cautious release process for the multi-service repository. It does not imply that tagged releases or automated deployments are currently configured.

## 1. Define scope

List the services included in the release. A frontend-only change does not require rebuilding every ML service, but shared API or model changes may affect several components.

## 2. Validate

Run the appropriate frontend lint/build, backend tests, quiz build, and Python service smoke checks. Record the exact runtime versions and commands.

## 3. Review security and compatibility

- Confirm no credentials or private data are included.
- Review dependency alerts and workflow permissions.
- Verify API compatibility with the deployed frontend.
- Verify model artifact and preprocessing compatibility.
- Confirm database migration and rollback steps.
- Check file upload and external provider limits.

## 4. Prepare release notes

Update `CHANGELOG.md` with user-visible changes, fixes, breaking changes, security changes, and known limitations. Update the relevant service documentation.

## 5. Tag and publish

After maintainer approval, create a semantic version tag where appropriate. Do not create a release tag for an untested build. Include deployment notes and known limitations.

## 6. Deploy and smoke test

Deploy each affected service using its own configuration. Verify health checks, authentication, database connectivity, external provider calls, and representative feature flows.

## 7. Roll back if required

Keep the previous frontend/backend build and compatible model artifacts available. Revert database migrations only through a tested rollback plan. Record the incident and corrective action.
