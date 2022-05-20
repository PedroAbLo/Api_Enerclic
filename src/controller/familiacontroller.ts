import familiaJson from '../services/familia.json'
import { AbuelosFamiliar, HijoFamiliar, PadresFamiliar } from '../types'


const familiarJson:HijoFamiliar[]=familiaJson;


export function ordenarFamiliares():AbuelosFamiliar{

    let abuelo: AbuelosFamiliar ={
        numserie:0,
        tipo_dispositivo:0,
        id_abuelo:0,
        id_padre:0,
        padres : []
    }

    for(let persona of familiarJson){


        let padre : PadresFamiliar ={
            numserie:0,
            tipo_dispositivo:0,
            id_abuelo:0,
            id_padre:0,
            hijos : []
        }
        let hijo : HijoFamiliar ={
            numserie:0,
            tipo_dispositivo:0,
            id_abuelo:0,
            id_padre:0
        }

        if (persona.id_abuelo === null && persona.id_padre === null){

            abuelo.id_abuelo = persona.id_abuelo;
            abuelo.id_padre = persona.id_padre
            abuelo.tipo_dispositivo = persona.tipo_dispositivo
            abuelo.numserie = persona.numserie

        }else if(persona.id_padre === null && persona.id_abuelo != null){

            padre.id_abuelo = persona.id_abuelo;
            padre.id_padre = persona.id_padre;
            padre.tipo_dispositivo = persona.tipo_dispositivo;
            padre.numserie = persona.numserie;
            abuelo.padres.push(padre);

        } else{

            hijo.id_abuelo = persona.id_abuelo;
            hijo.id_padre = persona.id_padre;
            hijo.tipo_dispositivo = persona.tipo_dispositivo;
            hijo.numserie = persona.numserie;
            for(let papa in abuelo.padres){
                if(abuelo.padres[papa].numserie === hijo.id_padre)
                    abuelo.padres[papa].hijos.push(hijo)
            }


        }
    }
    return abuelo;

}