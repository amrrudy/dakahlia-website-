# Dakahlia Website Dockerization

## What was added

- `Dockerfile`: builds the Vite/React application with Node.js 20, then serves the production `dist` output from Nginx.
- `nginx.conf.template`: serves static assets, enables gzip compression, caches Vite assets, falls back all app routes to `index.html` for React Router, and listens on the `PORT` environment variable required by Cloud Run.
- `docker-compose.yml`: provides a one-command production container that maps host port `8080` to container port `8080`.
- `CLOUD_RUN.md`: describes how to deploy the container to Google Cloud Run.
- `.dockerignore`: keeps local dependencies, build output, Git metadata, and the existing zip archive out of the Docker build context.

## How the image works

The Dockerfile uses two stages:

1. `build`: installs dependencies with `npm ci` and runs `npm run build`.
2. `runtime`: copies the generated `dist` folder into the official Nginx Alpine image.

The runtime image does not include the source code, TypeScript compiler, or Node.js dependencies. It only serves the compiled static website.

## Run with Docker Compose

```bash
docker compose up --build -d
```

Open:

```text
http://localhost:8080
```

Stop the container:

```bash
docker compose down
```

## Run with Docker only

Build the image:

```bash
docker build -t dakahlia-website:latest .
```

Run the container:

```bash
docker run --rm -e PORT=8080 -p 8080:8080 --name dakahlia-website dakahlia-website:latest
```

Open:

```text
http://localhost:8080
```

## Change the exposed port

Edit `docker-compose.yml`:

```yaml
ports:
  - "8080:8080"
```

For example, use `"3000:8080"` to publish the website at `http://localhost:3000`.

## Notes

- This is a production static container, not a Vite development server.
- The container listens on `PORT`, defaulting to `8080`, so it is compatible with Google Cloud Run.
- Client-side routes such as `/about`, `/companies`, and `/contact` are handled by the Nginx fallback to `index.html`.
- The container serves whatever is produced by `npm run build`.

## Google Cloud Run

Use `CLOUD_RUN.md` for Cloud Run deployment commands.

## Automatic deployment with GitHub Actions

The project includes `.github/workflows/deploy.yml`.

When code is pushed to the `main` branch, GitHub Actions connects to your server with SSH and runs:

```bash
cd "$SERVER_APP_PATH"
git pull origin main
docker compose up -d --build
docker image prune -f
```

This rebuilds the Docker image from the latest code and restarts the running container.

### Server requirements

Install these on the server:

- Git
- Docker
- Docker Compose plugin

Clone the repository on the server once:

```bash
git clone <your-repository-url> /opt/dakahlia-website
cd /opt/dakahlia-website
docker compose up -d --build
```

Make sure the server user used by GitHub Actions can run Docker commands. On Linux this usually means adding the user to the `docker` group:

```bash
sudo usermod -aG docker <server-user>
```

Log out and back in after changing the Docker group.

### GitHub secrets

Add these secrets in GitHub:

Repository -> Settings -> Secrets and variables -> Actions -> New repository secret

| Secret | Example | Description |
|---|---|---|
| `SERVER_HOST` | `123.123.123.123` | Server IP address or domain |
| `SERVER_USER` | `ubuntu` | SSH username |
| `SERVER_SSH_KEY` | private key text | Private SSH key allowed to access the server |
| `SERVER_PORT` | `22` | SSH port |
| `SERVER_APP_PATH` | `/opt/dakahlia-website` | Folder where the repo is cloned on the server |

### SSH key setup

Create a deploy key on your local machine:

```bash
ssh-keygen -t ed25519 -C "github-actions-dakahlia" -f dakahlia_deploy_key
```

Copy the public key to the server user's `authorized_keys`:

```bash
cat dakahlia_deploy_key.pub
```

Paste the output into:

```text
~/.ssh/authorized_keys
```

Put the private key content from `dakahlia_deploy_key` into the GitHub secret named `SERVER_SSH_KEY`.

### Manual deployment

The workflow also supports manual runs from:

GitHub -> Actions -> Deploy Dakahlia Website -> Run workflow
