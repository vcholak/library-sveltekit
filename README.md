# Library app

Full-stack app using SvelteKit.

Authentication: Magic Link and OAuth (Google, GitHub) using Auth.js

Database: MongoDB via Prisma ORM

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
DATABASE_URL='your-mongodb-connection-string'

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

# GitHub client OAuth credentials
GITHUB_CLIENT_ID="your-client-id"
GITHUB_CLIENT_SECRET="your-client-secret"
```

### Prisma ORM

#### Install Prisma CLI

```bash
npm install prisma --save-dev
```
#### Create *schema.prisma*

```bash
npx prisma init --datasource-provider mongodb
```

#### Update *schema.prisma*

Add/update models in *schema.prisma*

#### Generate Prisma client

```bash
dotenv -e .env.development -- npx prisma generate
```

#### Update database 

```bash
dotenv -e .env.development -- npx prisma db push
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

To preview your production build locally:

```bash
npm run preview
```

## Deploy to Vercel

Add all the above environment variables exept NODE_ENV.

Override build command as followind:

```bash
prisma generate & vite build
```