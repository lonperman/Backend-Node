import usuarios from '../models/usuarios';

export async function createUsuarios(req, res){
    const {id_usuario, nom_usuario, correo, telefono, pass, sexo, tipo} = req.body;
    try{
        let newUsuario = await usuarios.create({
            id_usuario,
            nom_usuario,
            correo,
            telefono,
            pass,
            sexo,
            tipo
        },{
            fields: ['id_usuario', 'nom_usuario', 'correo', 'telefono', 'pass', 'sexo', 'tipo']
        });
        if(newUsuario){
            return res.json({
                message: "true"
            });
        }else{
            return res.json({
                message: "false"
            })
        }
    }catch(e){
        console.log(e);
    }
}

export async function consultUsuarios(req, res){
    try{
        const allusers = await usuarios.findAll();
            res.json({
                data: allusers
            });
    }catch(e){
        console.log(e);
    }
}

export async function oneUsuario(req, res){
    try{
        const {id_usuario} = req.body;
        const usuario = await usuarios.findOne({
            
            where:{
                id_usuario
            }
        })
        res.json({
            usuario
        })
    }catch(e){
        console.log(e);
    }
}

export async function deleteUsuario(req, res){
    const {id_usuario} = req.body;
    const deleteRowCount = await usuarios.destroy({
        where:{
            id_usuario
        }
    });
    res.json({
        message: "usuario eliminado"
    })
}

export async function updateUsuaios(req, res){
    const {id_usuario} = req.params
    const{nom_usuario, correo, telefono, pass, sexo} = req.body;
    usuarios.findAll({
        attributes: ['id_usuario', 'nom_usuario', 'correo', 'telefono', 'pass', 'sexo', 'tipo'],
        where:{
            id_usuario
        }
    });
    const update = await usuarios.update({
        nom_usuario,
        correo,
        telefono,
        pass,
        sexo
    },
    {
        where:{
            id_usuario
        }
    });
    return res.json({
         message: "modificado"
    }) 

}

export async function consultarLogin(req, res){
    
    const {id_usuario, pass} = req.body;
    const usuario = await usuarios.findAll({
       /*attributes: [id_usuario,pass]*/
        where: {
            id_usuario,
            pass
        }
    })
    console.log(usuario);
    if(usuarios.id_usuario = id_usuario){
    
    return res.json("Existe")
    
    }else{
    
    return res.json("No Existe")
     
    }
        
   
    
}

