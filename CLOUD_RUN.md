# Google Cloud Run Deployment

This project is ready for Google Cloud Run.

Cloud Run expects the container to listen on the port provided by the `PORT` environment variable. The Docker image sets `PORT=8080` by default and Nginx reads it through `nginx.conf.template`.

## Deploy from local machine

Set your Google Cloud project:

```bash
gcloud config set project <project-id>
```

Enable required APIs:

```bash
gcloud services enable run.googleapis.com artifactregistry.googleapis.com cloudbuild.googleapis.com
```

Create an Artifact Registry repository:

```bash
gcloud artifacts repositories create dakahlia \
  --repository-format=docker \
  --location=us-central1 \
  --description="Dakahlia website images"
```

Build and push the image with Cloud Build:

```bash
gcloud builds submit \
  --tag us-central1-docker.pkg.dev/<project-id>/dakahlia/dakahlia-website:latest
```

Deploy to Cloud Run:

```bash
gcloud run deploy dakahlia-website \
  --image us-central1-docker.pkg.dev/<project-id>/dakahlia/dakahlia-website:latest \
  --region us-central1 \
  --platform managed \
  --allow-unauthenticated \
  --port 8080
```

After deployment, Google Cloud prints the public service URL.

## Update the live site

After changing code, run:

```bash
gcloud builds submit \
  --tag us-central1-docker.pkg.dev/<project-id>/dakahlia/dakahlia-website:latest

gcloud run deploy dakahlia-website \
  --image us-central1-docker.pkg.dev/<project-id>/dakahlia/dakahlia-website:latest \
  --region us-central1 \
  --platform managed \
  --allow-unauthenticated \
  --port 8080
```

Cloud Run creates a new revision and routes traffic to it.

## Automatic deployment after every push

The project includes `cloudbuild.yaml`.

Use this when you want every push to your GitHub branch to automatically:

1. Build the Docker image.
2. Push it to Artifact Registry.
3. Deploy a new Cloud Run revision.
4. Route traffic to the new revision.

### One-time Google Cloud setup

Enable the required APIs:

```bash
gcloud services enable run.googleapis.com artifactregistry.googleapis.com cloudbuild.googleapis.com
```

Create the Docker image repository if it does not already exist:

```bash
gcloud artifacts repositories create dakahlia \
  --repository-format=docker \
  --location=us-central1 \
  --description="Dakahlia website images"
```

Get your Cloud Build service account:

```bash
gcloud projects describe <project-id> --format="value(projectNumber)"
```

The service account usually looks like:

```text
<project-number>@cloudbuild.gserviceaccount.com
```

Give it permission to deploy Cloud Run and push images:

```bash
gcloud projects add-iam-policy-binding <project-id> \
  --member="serviceAccount:<project-number>@cloudbuild.gserviceaccount.com" \
  --role="roles/run.admin"

gcloud projects add-iam-policy-binding <project-id> \
  --member="serviceAccount:<project-number>@cloudbuild.gserviceaccount.com" \
  --role="roles/artifactregistry.writer"

gcloud projects add-iam-policy-binding <project-id> \
  --member="serviceAccount:<project-number>@cloudbuild.gserviceaccount.com" \
  --role="roles/iam.serviceAccountUser"
```

### Create the trigger

In Google Cloud Console:

1. Open Cloud Build.
2. Go to Triggers.
3. Click Create trigger.
4. Connect your GitHub repository.
5. Event: Push to a branch.
6. Branch: `^main$`.
7. Configuration: Cloud Build configuration file.
8. Location: Repository.
9. Cloud Build configuration file location: `cloudbuild.yaml`.

Save the trigger.

After that, every push to `main` deploys automatically to Cloud Run.

### Trigger substitutions

The default values in `cloudbuild.yaml` are:

```yaml
_REGION: us-central1
_AR_REPOSITORY: dakahlia
_SERVICE_NAME: dakahlia-website
```

Change these in the trigger if your Cloud Run region, Artifact Registry repository, or service name is different.

## Recommended production settings

For a static website, these settings are usually enough:

```bash
gcloud run services update dakahlia-website \
  --region us-central1 \
  --min-instances 0 \
  --max-instances 10 \
  --memory 256Mi \
  --cpu 1
```

Use `--min-instances 1` if you want to reduce cold starts.
