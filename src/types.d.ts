export interface HijoFamiliar{
    numserie:number, 
    tipo_dispositivo:number,
    id_padre:number | null,
    id_abuelo:number | null
} 

export interface PadresFamiliar extends HijoFamiliar{

    hijos:HijoFamiliar[]

}

export interface AbuelosFamiliar extends HijoFamiliar{

    padres:PadresFamiliar[]

}


