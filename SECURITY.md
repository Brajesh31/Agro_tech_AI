# Security Policy

## Supported versions

AgroTech AI is currently under active development. Security fixes are applied to the default branch and to the most recent release, when releases are published.

| Version | Support |
| --- | --- |
| `main` | Supported |
| Latest tagged release | Supported |
| Older or untagged snapshots | Best effort only |

## Reporting a vulnerability

Please do not disclose security vulnerabilities in a public issue, pull request, discussion, or chat.

Use GitHub's **Report a vulnerability** button on the repository's Security tab when it is available. If private reporting is unavailable, contact the repository maintainers through the private contact information listed in the repository owner profile and include `AgroTech AI security report` in the subject.

Include:

- A clear description of the vulnerability and affected service/path.
- Reproduction steps or a minimal proof of concept.
- The impact and realistic attack prerequisites.
- Affected commit, version, or deployment.
- Suggested remediation, if known.

Please redact credentials, personal data, farmer data, private URLs, and production identifiers. If a secret is exposed, report it without including the secret value and rotate it immediately.

## Response process

Maintainers will acknowledge a report within 7 days when contact details are provided, investigate the report, and coordinate a fix or mitigation. Timelines depend on severity, reproducibility, and the affected deployment. Credit will be given to reporters who request it and follow coordinated disclosure.

## Security expectations for contributors

- Store secrets in environment variables or a managed secret store, never in source or JSON configuration.
- Use the least privilege necessary for API keys, databases, storage, and deployment identities.
- Validate uploaded files, request sizes, content types, and user input.
- Do not log tokens, passwords, session cookies, or sensitive agricultural/user data.
- Review dependency and model provenance before deployment.
- Rotate any credential that has appeared in a tracked file, log, issue, or pull request.

The platform provides decision-support predictions. It must not be represented as a guarantee of crop, plant-health, financial, or safety outcomes.
