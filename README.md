# Library app

This is an example of how to use Auth.js in SvelteKit for OAuth and Magic Link authentication.

## Creating a project

```bash
# create a new project in the current directory
npm create svelte@latest

# create a new project in my-app
npm create svelte@latest my-app
```

## Developing

### Install dependencies

```bash
npm install
```

### Add .env.development

```
# environment
NODE_ENV="development"

# database
MONGODB_CONNECTION_STRING='your-mongodb-connection-string'

# Auth.js secret
AUTH_SECRET="your-atleast-32-characters-long-secret"

# Email
SMTP_USER=apikey
SMTP_PASSWORD="your-sendgrid-api-key"
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
EMAIL_FROM="your-verified-single-sender"

# Google client OAuth credentials
GOOGLE_CLIENT_ID="your-client-id"
GOOGLE_CLIENT_SECRET="your-client-secret"
```

### Run

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
