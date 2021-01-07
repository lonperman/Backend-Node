import inscripciones from '../models/inscripciones';

export async function createInscripciones(req, res){
    const {codigo_conferencia, id_usuario, fecha_registro, estado} = req.body;
    try{
        let newInscripcion = await inscripciones.create({
            codigo_conferencia, 
            id_usuario, 
            fecha_registro, 
            estado
        },{
            fields: ['codigo_conferencia', 'id_usuario', 'fecha_registro', 'estado']
        });
        if(newInscripcion){
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

export async function consultInscripcion(req, res){
    try{
        const allusers = await inscripciones.findAll();
            res.json({
                data: allusers
            });
    }catch(e){
        console.log(e);
    }
}

export async function oneInscripcion(req, res){
    try{
        const {codigo_conferencia} = req.body;
        const inscripcion = await inscripciones.findOne({
            where:{
                codigo_conferencia
            }
        })
        res.json({
            data: inscripcion
        })
    }catch(e){
        console.log(e);
    }
}

export async function deleteInscripcion(req, res){
    const {codigo_conferencia, id_usuario} = req.body;
    const deleteRowCount = await inscripciones.destroy({
        where:{
            codigo_conferencia,
            id_usuario
        }
    });
    res.json({
        message: "inscripcion eliminada"
    })
}

export async function updateInscripcion(req, res){
    const {codigo_conferencia, id_usuario} = req.params;
    const {fecha_registro, estado} = req.body;
    inscripciones.findAll({
        attributes: ['codigo_conferencia', 'id_usuario', 'fecha_registro', 'estado'],
        where:{
            codigo_conferencia,
            id_usuario
        }
    });
    const update = await inscripciones.update({ 
        fecha_registro, 
        estado
    },{
        where:{
            codigo_conferencia,
            id_usuario
        }
    });

    return res.json({
        message: "modificado"
    }) 

}