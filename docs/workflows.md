# 🤖 GitHub Actions and Automation

The repository currently contains workflows for CodeQL analysis, issue and pull request comments, stale issue/PR management, and README timestamp updates.

## Existing workflows

| Workflow | Trigger | Purpose |
|---|---|---|
| `codeql.yml` | Push, PR, schedule, manual | CodeQL analysis for Actions, JavaScript/TypeScript, and Python |
| `update-readme.yml` | Push, hourly schedule, manual | Update README timestamp and push a commit |
| `close-old-issue.yml` | Daily schedule, manual | Mark and close stale issues |
| `close-old-pr.yml` | Daily schedule, PR events, manual | Mark and close stale pull requests |
| `autocomment-issue.yml` | Issue opened | Welcome issue author |
| `autocomment-iss-close.yml` | Issue closed | Thank issue author |
| `autocomment-pr-raise.yml` | PR opened | Welcome PR author |
| `autocomment-pr-merge.yml` | PR closed and merged | Thank contributor |

## CI versus repository automation

The comment, stale-item, and timestamp workflows are repository automation. They are not build/test CI. A dedicated validation workflow should install and test the frontend, backend, quiz app, and Python syntax.

## Permissions and security

- Grant each workflow only the permissions it needs.
- Pin third-party actions to reviewed versions or immutable commit SHAs according to project policy.
- Review all `pull_request_target` workflows carefully. Never check out or execute untrusted PR code with privileged tokens.
- Avoid exposing secrets to fork pull requests.
- Keep workflow logs free of credentials and personal data.

## README timestamp automation caution

The current README workflow runs hourly and pushes directly to the default branch. This can create unnecessary commits and can fail when repository token permissions or branch rules prohibit direct pushes. Prefer updating the README only when meaningful content changes, or remove timestamp automation if it provides no value.

## Dependabot

The repository includes `.github/dependabot.yml`. Review generated dependency PRs by service, run the matching build/test commands, and avoid applying one service's dependency upgrades to unrelated runtimes.
