export default defineEventHandler((event) => {
  setResponseHeader(event, 'x-custom', '123');
  setResponseHeader(event, 'access-control-allow-credentials', 'true');
  setResponseHeader(event, 'access-control-allow-origin', 'protocol://test');

  return {
    body: 'OK',
  }
})
