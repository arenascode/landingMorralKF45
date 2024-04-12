import { Router } from "express";
import * as purchaseController from "../../controllers/purchase.controller.js"

export const routerPurchase = Router()

routerPurchase.post('/newPurchase', purchaseController.newPurchase)
routerPurchase.get('/getClients', purchaseController.getClients)
