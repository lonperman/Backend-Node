import{Router} from 'express';
import { createEncuestas, consultEncuestas, oneEncuesta, deleteEncuesta, updateEncuesta } from '../controllers/encuestas.controller';
const router = Router();

router.post('/crear', createEncuestas);
router.get('/consultar', consultEncuestas);
router.post('/consultarone', oneEncuesta);
router.put('/modificar/:codigo_conferencia/:id_usuario', updateEncuesta);
router.post('/eliminar', deleteEncuesta);




export default router;