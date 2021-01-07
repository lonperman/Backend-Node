import{Router} from 'express';
import { createConferencias, consultConferencias, oneConferencia, deleteConferencia, updateConferencias } from '../controllers/conferencias.controller';
import { updateInscripcion, deleteInscripcion } from '../controllers/inscripciones.controller';
const router = Router();

router.post('/crear', createConferencias);
router.get('/consultar', consultConferencias);
router.post('/consultarone', oneConferencia);
router.put('/modificar/:codigo_conferencia', updateConferencias);
router.post('/eliminar', deleteConferencia);


export default router;