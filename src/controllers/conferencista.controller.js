import conferencistas from '../models/conferencistas';


export async function createConferencistas(req, res){
    const {id_conferencista, nom_conferencista, correo, telefono, especialidad, sexo, estado} = req.body;
    try{
        let newConferencista = await conferencistas.create({
            id_conferencista,
            nom_conferencista, 
            correo, 
            telefono, 
            especialidad, 
            sexo, 
            estado
        },{
            fields: ['id_conferencista', 'nom_conferencista', 'correo', 'telefono', 'especialidad', 'sexo', 'estado']
        });
        if(newConferencista){
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

export async function consultConferencistas(req, res){
    try{
        const allusers = await conferencistas.findAll();
            res.json({
                data: allusers
            });
    }catch(e){
        console.log(e);
    }
}

export async function oneConferencista(req, res){
    try{
        const {id_Conferencista} = req.body;
        const conferencista = await conferencistas.findOne({
            where:{
                id_conferencista
            }
        })
        res.json({
            data: conferencista
        })
    }catch(e){
        console.log(e);
    }
}

export async function deleteConferencista(req, res){
    const {id_conferencista} = req.body;
    const deleteRowCount = await conferencistas.destroy({
        where:{
            id_conferencista
        }
    });
    res.json({
        message: "confenrencista eliminado"
    })
}

export async function updateConferencista(req, res){
    const {id_conferencista} = req.params;
    const {nom_conferencista, correo, telefono, especialidad, sexo, estado} = req.body;
    conferencistas.findAll({
        attributes: ['id_confenrencista', 'nom_conferencista', 'correo', 'telefono', 'especialidad', 'sexo', 'estado'],
        where:{
            id_conferencista
        }
    });
    const update = await conferencistas.update({
        nom_conferencista,
        correo,
        telefono,
        especialidad,
        sexo,
        estado
    },{
        where:{
            id_Conferencista
        }
    });
    return res.json({
        message: "modificado"
    }) 

}