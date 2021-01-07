import{Router} from 'express';
import { createConferencistas, consultConferencistas, oneConferencista, deleteConferencista, updateConferencista } from '../controllers/conferencista.controller';
const router = Router();

router.post('/crear', createConferencistas);
router.get('/consultar', consultConferencistas);
router.post('/consultarone', oneConferencista);
router.put('/modificar/:id_conferencista', updateConferencista);
router.post('/eliminar', deleteConferencista);




export default router;