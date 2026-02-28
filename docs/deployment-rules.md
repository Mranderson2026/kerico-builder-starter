# Deployment Rules

## Preview
- Trigger: Pull Request
- Purpose: QA + stakeholder review

## Production
- Trigger: Manual workflow_dispatch only
- Requirement: Explicit Michael approval before run

## Rollback
- Use previous Vercel deployment promotion/rollback immediately on Sev-1 issue.
