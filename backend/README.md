# ⚙️ AgroTech AI Backend

The main application backend is a Node.js and Express service. It connects to MongoDB through Mongoose and registers route modules from `routes/`.

## Structure

| Directory | Purpose |
|---|---|
| `controllers/` | Request handlers and business logic |
| `middleware/` | Authentication, encryption, and rental middleware |
| `model/` | Mongoose schemas and models |
| `routes/` | Express route definitions |
| `services/` | Email and Passport configuration |
| `test/` | Jest/Supertest API tests |

## Requirements

- Node.js compatible with the dependencies in package-lock.json
- npm
- MongoDB
- Environment variables for database, session, JWT, email, OAuth, and enabled integrations

## Setup

```bash
npm ci
```

Create a local `.env` based on [`.env.sample`](.env.sample), then configure real values locally. Do not commit secrets.

## Commands

| Command | Purpose |
|---|---|
| `npm run dev` | Start with nodemon |
| `npm start` | Start with Node.js |
| `npm test` | Run Jest tests |

The default port in the entrypoint is 8080 unless `PORT` is set.

## Main route families

The entrypoint registers authentication and Google OAuth, users, contact, shop, rental products, carts, wishlists, rental orders, administration, analytics, reviews, promotions, seasonal pricing, rewards, ratings, discussions, agricultural products, and Gemini content generation.

For exact paths, methods, authentication requirements, and payload schemas, inspect `routes/` and the corresponding controller. See the root [API guide](../docs/api.md).

## Database

The service connects to MongoDB using `MONGODB_URL`. The user and commerce models are in `model/`. Review schema changes alongside controllers, indexes, and existing data.

## Security requirements

Before production deployment:
- Replace hard-coded session secrets with `SESSION_SECRET` and secure cookie configuration.
- Use unique high-entropy JWT secrets per environment.
- Restrict CORS to trusted frontend origins.
- Apply authentication and role authorization to protected operations.
- Validate input and uploaded files.
- Do not expose raw exception messages or stack traces.
- Rotate credentials previously committed to source control.
- Keep logs free of credentials and personal data.

The user profile GET and PUT routes are registered with JWT authentication. They return only allowlisted profile fields; the update route currently supports first and last name. Email changes are intentionally not supported through this endpoint because they require a separate verification flow.
