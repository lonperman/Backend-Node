import{Router} from 'express';
import { createEspacios, consultEspacios, oneEspacios, deleteEspacios, updateEspacios } from '../controllers/espacios.controller';
const router = Router();

router.post('/crear', createEspacios);
router.get('/consultar', consultEspacios);
router.post('/consultarone', oneEspacios);
router.put('/modificar/:codigo_espacio', updateEspacios);
router.post('/eliminar', deleteEspacios);




export default router;