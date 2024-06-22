import authService from "../services/login.service.js";

export default {
    login: async (req, res) => {
        try {
            console.log(req.body)
            const auth = await authService.verificaCredenciales(req.body);
            res.cookie('token', auth.token, {
                httpOnly: true, // Ayuda a proteger contra ataques XSS
                secure: process.env.NODE_ENV === 'production', // Solo envía la cookie a través de HTTPS en producción
                sameSite: 'Strict', // Ayuda a proteger contra ataques CSRF
                maxAge: 3600000 // 1 hora en milisegundos
            });
            return res.status(auth.code).json({
                message: auth.message,
                data: auth.data,
                // token: auth.token,
            });
        } catch (error) {
            return res.status(500).json({
                message: error.message,
                estado: "Error en las credenciales"
            });
        }
    },
};
