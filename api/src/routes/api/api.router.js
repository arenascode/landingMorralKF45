import { Router } from "express"
import { routerSessions } from "./sessions.router.js"
import { routerPurchase} from "./purchase.router.js"

export const apiRouter = Router()

apiRouter.use('/sessions', routerSessions)
apiRouter.use('/purchase', routerPurchase)
