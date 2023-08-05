# Nuxt / Nitro - Minimal Repro CORS Options Call

Run nuxt (`pnpm dev:nuxt`) or nitro (`pnpm dev:nitro`) and send a cors options request to the `http://localhost:3000/test` endpoint.

In the nuxt response, the `Access-Control-Allow-Credentials` header is missing, and the `Access-Control-Allow-Origin` header is incorrectly set to `*`, disregarding the actual origin.

The Nitro response behaves as expected, including the `Access-Control-Allow-Credentials` header and correctly setting the `Access-Control-Allow-Origin` header to the actual origin.

It looks like in nuxt context the event handler is not called for the cors options request.

httppie request:
```bash
http --follow --all OPTIONS :3000/test \
Origin:'protocol://test'
```

curl request:
```bash
curl -I -X OPTIONS http://localhost:3000/test
```
### Wrong Nuxt Response
```bash
HTTP/1.1 204 No Content
access-control-allow-methods: GET,HEAD,PUT,PATCH,POST,DELETE
access-control-allow-origin: *
connection: close
content-length: 0
date: Sat, 28 Oct 2023 00:23:09 GMT
vary: Access-Control-Request-Headers
```
### Correct Nitro Response
```bash
HTTP/1.1 200 OK
access-control-allow-credentials: true
access-control-allow-origin: protocol://test
connection: close
content-length: 18
content-type: application/json
date: Sat, 28 Oct 2023 00:19:27 GMT
x-custom: 123

{
    "body": "OK"
}
```

## Setup

Make sure to install the dependencies:

```bash
# pnpm
pnpm install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# nuxt
pnpm run dev:nuxt
# or nitro
pnpm run dev:nitro
```

