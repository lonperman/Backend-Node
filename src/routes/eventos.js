import{Router} from 'express';
import { createEventos, consultEventos, oneEventos, deleteEventos, updateEventos } from '../controllers/eventos.controller';

const router = Router();

router.post('/crear', createEventos);
router.get('/consultar', consultEventos);
router.post('/consultarone', oneEventos);
router.put('/modificar/:codigo_evento', updateEventos);
router.post('/eliminar', deleteEventos);



export default router;