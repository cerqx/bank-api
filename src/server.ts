import { app } from './app'
import { env } from './env'

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log('HTTP Server Running! 🚀')
  })
  .catch(() => {
    console.log('Something went wrong 😕')
  })
