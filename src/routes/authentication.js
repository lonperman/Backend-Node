import {Router} from 'express';
import app from '../app';
const router = Router();

const passport = require('passport');



router.get('/signup',(req,res) => {    
    res.render('Hola');
});

router.post('/registro',passport.authenticate('local.signup',{
    failureFlash: true
}));

router.post('/login',passport.authenticate('local.signin',{
        failureFlash: true
    
}));



export default router;