# Roadmap

This roadmap is directional rather than a promise of delivery dates. Priorities may change as model quality, field feedback, and deployment requirements become clearer.

## Now

- Consolidate the supported frontend/backend development workflow.
- Replace tracked service credentials with environment-based configuration and rotate any exposed keys.
- Add consistent health checks, request validation, error responses, and automated tests to the APIs.
- Document model inputs, outputs, provenance, and limitations.
- Establish dependency, license, and security scanning in CI.

## Next

- Define versioned API contracts and a stable gateway for the specialist services.
- Reduce duplicate/legacy API implementations and publish a support matrix for each service.
- Add observability: structured logs, metrics, tracing, and privacy-safe audit events.
- Add reproducible model evaluation datasets and regression checks.
- Improve accessibility, localization, mobile behavior, and low-bandwidth usability.

## Later

- Provide authenticated multi-tenant deployments with role-based access control.
- Add farmer-facing offline or low-connectivity workflows.
- Introduce model feedback loops with consent, data governance, and drift monitoring.
- Publish tagged releases with upgrade notes and deployment manifests.
- Expand integrations for weather, market, soil, and agricultural advisory data with documented provenance.

## How to influence the roadmap

Open a feature request with the user problem, affected audience, proposed outcome, constraints, and evidence. For model improvements, include evaluation methodology and safety considerations.
