import{Router} from 'express';
import {createUsuarios, consultUsuarios, oneUsuario, consultarLogin, deleteUsuario, updateUsuaios} from '../controllers/usuarios.controller';
const router = Router();

// /api/usuarios/
router.post('/crear', createUsuarios);
router.get('/consultar', consultUsuarios);
router.post('/consultarone', oneUsuario);
router.post('/eliminar', deleteUsuario);
router.put('/modificar/:id_usuario', updateUsuaios);
router.post('/login', consultarLogin);


export default router; 