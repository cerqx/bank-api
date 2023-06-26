import fastify from 'fastify'

const app = fastify()

app.get('/hello', () => {
  return 'Hello World'
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('HTTP Server Running! 🚀')
  })
  .catch(() => {
    console.log('Something went wrong 😕')
  })
