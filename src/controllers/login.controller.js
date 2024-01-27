import authService from "../services/login.service.js";

export default {
    login: async (req, res) => {
        try {
            console.log(req.body)
            const auth = await authService.verificaCredenciales(req.body);
            return res.status(auth.code).json({
                message: auth.message,
                data: auth.data
            });
        } catch (error) {
            return res.status(500).json({
                message: error.message,
                estado: "Error en las credenciales"
            });
        }
    },
};
