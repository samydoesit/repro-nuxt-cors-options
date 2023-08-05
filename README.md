# Nuxt Minimal Repro cors options

```bash
http --follow --all OPTIONS :3000/test \
Authorization:'Basic 123456' \
Access-Control-Request-Method:'POST' \
Access-Control-Request-Headers:'X-Requested-With' \
sec-fetch-mode:'cors' \
Origin:'capacitor://localhost'
```

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
