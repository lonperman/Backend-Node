import eventos from '../models/eventos';

export async function createEventos(req, res){
    const {nombre_evento,dependencia, fechainicio, fechafinal} = req.body;
    try{
        let newEventos = await eventos.create({
            nombre_evento, 
            dependencia,
            fechainicio,
            fechafinal 
        },{
            fields: ['nombre_evento', 'dependencia', 'fechainicio', 'fechafinal']
        });
        if(newEventos){
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

export async function consultEventos(req, res){
    try{
        const allusers = await eventos.findAll();
            res.json({
                data: allusers
            });
    }catch(e){
        console.log(e);
    }
}

export async function oneEventos(req, res){
    try{
        const {codigo_evento} = req.body;
        const evento = await eventos.findOne({
            where:{
                codigo_evento
            }
        })
        res.json({
            data: evento
        })
    }catch(e){
        console.log(e);
    }
}

export async function deleteEventos(req, res){
    const {codigo_evento} = req.body;
    const deleteRowCount = await eventos.destroy({
        where:{
            codigo_evento
        }
    });
    res.json({
        message: "evento eliminado"
    })
}

export async function updateEventos(req, res){
    const {codigo_evento} = req.params;
    const {nombre_evento,dependencia, fechainicio, fechafinal} = req.body;
    eventos.findAll({
        attributes: ['codigo_evento','nombre_evento', 'dependencia', 'fechainicio', 'fechafinal'],
        where:{
            codigo_evento
        }
    });
    const update = await eventos.update({
        nombre_evento, 
        dependencia,
        fechainicio,
        fechafinal 
        },{
            where:{
                codigo_evento
            }
        });

    return res.json({
        message: "modificado"
    }) 

}