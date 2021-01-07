import{Router} from 'express';
import { createInscripciones, consultInscripcion, oneInscripcion, deleteInscripcion, updateInscripcion } from '../controllers/inscripciones.controller';
const router = Router();

router.post('/crear', createInscripciones);
router.get('/consultar', consultInscripcion);
router.post('/consultarone', oneInscripcion);
router.put('/modificar/:codigo_conferencia/:id_usuario', updateInscripcion);
router.post('/eliminar', deleteInscripcion);




export default router;