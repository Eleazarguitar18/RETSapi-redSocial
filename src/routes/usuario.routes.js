import { Router } from "express";
import usuarioController from "../controllers/usuario.controller.js";

const Route = Router()
Route.get('/usuarioS', usuarioController.listar)
Route.post('/usuarioS', usuarioController.agregar)

export default Route;