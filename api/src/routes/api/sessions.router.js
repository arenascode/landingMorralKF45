import { Router } from "express";
import * as sessionsController from "../../controllers/sessions.controller.js"
export const routerSessions = Router()

routerSessions.post('/login', sessionsController.adminLogin)