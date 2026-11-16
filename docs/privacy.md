# 🔒 Privacy and Data Handling

The platform can process account details, contact information, addresses, location queries, crop images, discussion content, product orders, rental records, and external AI prompts. Treat these as potentially sensitive data.

## Data minimization

- Collect only fields needed for the feature.
- Explain the purpose of location, image, and account data collection.
- Avoid collecting precise location when a broader area is sufficient.
- Do not send personal data to an external AI or geocoding provider unless necessary and disclosed.

## Storage and access

- Restrict database access to authorized services and roles.
- Use TLS and managed secrets in production.
- Avoid exposing uploads through public static directories.
- Use generated filenames and private temporary storage for inference.
- Define deletion and retention schedules for uploads, accounts, messages, and logs.

## Logging

Do not log:
- Passwords, access tokens, API keys, or connection strings.
- Full authentication headers or session cookies.
- Private user records or contact details.
- Raw uploaded images unless explicitly required and controlled.
- Precise location history without a documented need.

Use request IDs and sanitized error details for diagnostics.

## Third-party services

Review the data handling terms of email, maps, OAuth, payment, generative AI, and search providers. Send only the minimum necessary data and configure provider retention/privacy controls where available.

## Development and support

Use synthetic or anonymized data in tests, screenshots, issue reports, and pull requests. Never upload production database exports or user images to public GitHub issues.

## User rights and operations

A production deployment should document how users can access, correct, export, and delete their data, as well as how requests are authenticated and fulfilled. The repository's code alone does not establish that these operational processes are implemented.
