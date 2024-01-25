import { Router } from "express";
import registroController from "../controllers/registro.controller.js";

const Route = Router()
Route.post('/usuario/registro', registroController.enviarcorreo)
Route.get('/usuario/registro/:codigo', registroController.verificarCodigo)

export default Route;