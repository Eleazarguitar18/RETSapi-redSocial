import { Router } from "express";
import usuarioNormalController from "../controllers/usuarioNormal.controller.js";

const Route = Router()
Route.get('/usuario_normal', usuarioNormalController.listar)
Route.post('/usuario_normal', usuarioNormalController.agregar)

export default Route;