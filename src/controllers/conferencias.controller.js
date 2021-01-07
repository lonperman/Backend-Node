import conferencias from '../models/conferencias';

export async function createConferencias(req, res){
    const {nombre_conferencia, cupo, codigo_evento, id_confenrencista, codigo_espacio, inicio, final} = req.body;
    try{
        let newConferencia = await conferencias.create({
            nombre_conferencia, 
            cupo, 
            codigo_evento, 
            id_confenrencista, 
            codigo_espacio, 
            inicio, 
            final
        },{
            fields: ['nombre_conferencia', 'cupo', 'codigo_evento', 'id_conferencista', 'codigo_espacio', 'inicio', 'final']
        });
        if(newConferencia){
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

export async function consultConferencias(req, res){
    try{
        const allusers = await conferencias.findAll();
            res.json({
                data: allusers
            });
    }catch(e){
        console.log(e);
    }
}

export async function oneConferencia(req, res){
    try{
        const {codigo_conferencia} = req.body;
        const conferencia = await conferencias.findOne({
            where:{
                codigo_conferencia
            }
        })
        res.json({
            data: conferencia
        })
    }catch(e){
        console.log(e);
    }
}

export async function deleteConferencia(req, res){
    const {codigo_conferencia} = req.body;
    const deleteRowCount = await conferencias.destroy({
        where:{
            codigo_conferencia
        }
    });
    res.json({
        message: "confenrencia eliminada"
    })
}

export async function updateConferencias(req, res){
    const {codigo_conferencia} = req.params;
    const {nombre_conferencia, cupo, codigo_evento, id_conferencista, codigo_espacio, inicio, final} = req.body;
    conferencias.findAll({
        attributes: ['codigo_conferencia','nombre_conferencia', 'cupo', 'codigo_evento', 'id_conferencista', 'codigo_espacio', 'inicio', 'final'],
        where:{
            codigo_conferencia
        }
    });
    const update = await conferencias.update({
        nombre_conferencia, 
        cupo, 
        codigo_evento, 
        id_conferencista, 
        codigo_espacio, 
        inicio, 
        final
    },{
        where:{
            codigo_conferencia
        }
    });

    return res.json({
        message: "modificado"
    }) 

}

