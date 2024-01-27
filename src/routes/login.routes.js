// rutas para poder validar a los usuarios
import { Router } from "express";
import authController from "../controllers/login.controller.js";

const Route = Router()

//Declaramos los endpoints
Route.post('/auth/login', authController.login);
// Route.post('/auth/registro', authController.registro);
// Route.post('/auth/prueba', authController.logout);

//cambio de contrasenia
// Route.post('/auth/login', authController.login);
export default Route;