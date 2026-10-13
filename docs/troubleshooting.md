# Troubleshooting

## Compose cannot start

Check Docker Desktop and the Compose file name:

```powershell
docker compose -f Docker-compose.yml config
docker compose -f Docker-compose.yml ps
docker compose -f Docker-compose.yml logs --tail 100 backend frontend mongo
```

If a port is already in use, stop the conflicting process or change the local mapping. Keep the frontend's configured backend URL in sync.

## Frontend cannot reach the backend

- Confirm the backend is running at the URL in `VITE_BACKEND_BASE_URL`.
- Restart Vite after changing `.env`; environment variables are read at startup.
- Check browser developer tools for CORS or mixed-content errors.
- Confirm the backend route and HTTP method match the frontend request.

## MongoDB connection failure

- Confirm the `mongo` container is healthy and listening on `27017`.
- Confirm `MONGODB_URL` points to `mongo` from a Compose container, or `localhost` from a host process.
- Check backend logs for authentication, timeout, and DNS errors.
- Do not paste connection strings into issues.

## Python dependency installation fails

Use a fresh virtual environment and the service's local requirements file. Older TensorFlow/PyTorch dependencies may not support the newest Python release or Windows architecture. Use a compatible interpreter/container instead of mixing packages across services.

## Model loading or prediction errors

- Confirm the model file exists at the path expected by the service.
- Verify the input shape, image format, preprocessing, and label mapping.
- Check that NumPy/TensorFlow/scikit-learn versions match the model environment.
- Test with a small sanitized fixture and inspect the service logs.

## Vercel deployment fails

Check the project root, entrypoint, included model files, runtime version, function size, memory, timeout, and environment variables. ML dependencies and large model artifacts may exceed serverless limits; use a container or dedicated inference service when appropriate.

## Security incident or exposed key

Do not commit a replacement key over the old value and assume the incident is fixed. Revoke and rotate the credential, inspect access logs, remove the secret from future history if required, and report the incident privately using [SECURITY.md](../SECURITY.md).
