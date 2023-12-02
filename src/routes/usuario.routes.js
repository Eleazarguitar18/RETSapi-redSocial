import { Router } from "express";
import usuarioController from "../controllers/usuario.controller.js";

const Route = Router()
Route.get('/usuario', usuarioController.listar)
Route.post('/usuario', usuarioController.agregar)

export default Route;