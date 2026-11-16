# Changelog

All notable changes to AgroTech AI are documented here. This project follows a practical Keep a Changelog format. Until the first tagged release, entries describe changes on the default development branch.

## [Unreleased]

### Added

- Expanded root README and directory-specific guides for the frontend, backend, consolidated APIs, and specialist agricultural services.
- Service catalog covering the main applications and independent Python APIs.
- Configuration, model, privacy, testing, workflow, maintenance, release-process, and model-card documentation.
- CI workflow for frontend lint/build, quiz build, backend JavaScript syntax, and Python syntax checks.
- Additional GitHub issue templates and a service-aware pull request template.
- Repository hygiene configuration and safer environment examples.

### Changed

- Documented the distinction between the primary Docker Compose stack and standalone AI/ML services.

### Security

- Removed tracked Groq JSON credential files and replaced them with environment-based configuration.
- Replaced a credential-bearing Google API sample with an empty placeholder.
- Updated chatbot and quiz setup to handle missing provider credentials safely.
- Added explicit guidance to rotate exposed credentials because the previous values may remain in Git history.

## Release history

No tagged releases have been published yet.
