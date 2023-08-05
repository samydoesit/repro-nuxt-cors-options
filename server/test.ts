export default defineEventHandler((event) => {
  handleCors(event, {
    allowHeaders: ['Contenty-Type', 'Authorization', 'X-Requested-With', 'Accept', 'Origin', 'Referer', 'User-Agent', 'Cookie', 'Set-Cookie', 'SAM'],
    credentials: true,
    methods: ['OPTIONS'],
    // @ts-expect-error
    origin: 'capacitor://localhost',
    // origin: ['capacitor://localhost'],
    preflight: {
      statusCode: 204,
    },
  })
  // setHeader(event, 'access-control-allow-origin', 'SCHEISSE IST DAS')
  if (event.node.req.method === 'OPTIONS') {
    return null
  }
  assertMethod(event, 'POST')

  return {
    body: 'OK',
  }
})
