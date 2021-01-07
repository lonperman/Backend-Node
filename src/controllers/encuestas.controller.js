import encuestas from '../models/encuestas';

export async function createEncuestas(req, res){
    const {codigo_conferencia, id_usuario, fecha_encuesta, p1, p2, p3, p4, p5} = req.body;
    try{
        let newEncuesta = await encuestas.create({
            codigo_conferencia, 
            id_usuario, 
            fecha_encuesta, 
            p1, 
            p2, 
            p3, 
            p4, 
            p5
        },{
            fields: ['codigo_conferencia', 'id_usuario', 'fecha_encuesta', 'p1','p2','p3','p4','p5']
        });
        if(newEncuesta){
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

export async function consultEncuestas(req, res){
    try{
        const allusers = await encuestas.findAll();
            res.json({
                data: allusers
            });
    }catch(e){
        console.log(e);
    }
}

export async function oneEncuesta(req, res){
    try{
        const {codigo_conferencia} = req.body;
        const encuesta = await encuestas.findOne({
            where:{
                codigo_conferencia
            }
        })
        res.json({
            data: encuesta
        })
    }catch(e){
        console.log(e);
    }
}

export async function deleteEncuesta(req, res){
    const {codigo_conferencia} = req.body;
    const deleteRowCount = await encuestas.destroy({
        where:{
            codigo_conferencia
        }
    });
    res.json({
        message: "encuesta eliminada"
    })
}

export async function updateEncuesta(req, res){
    const{codigo_conferencia, id_usuario} = req.params;
    const {fecha_encuesta, p1, p2, p3, p4, p5} = req.body;
    encuestas.findAll({
        attributes: ['codigo_conferencia', 'id_usuario', 'fecha_encuesta', 'p1','p2','p3','p4','p5'],
        where:{
            codigo_conferencia, 
            id_usuario
        }
    });
    const update = await encuestas.update({
        fecha_encuesta,
        p1, 
        p2, 
        p3, 
        p4, 
        p5
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