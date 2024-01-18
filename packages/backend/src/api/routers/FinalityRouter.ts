import Router from '@koa/router'

import { FinalityController } from '../controllers/finality/FinalityController'

export function createFinalityRouter(finalityController: FinalityController) {
  const router = new Router()

  router.get('/api/finality', async (ctx) => {
    const result = await finalityController.getFinality()

    if (result.type === 'error') {
      ctx.status = 503
      ctx.body = result.error
      return
    }
    ctx.body = result.data
  })

  return router
}