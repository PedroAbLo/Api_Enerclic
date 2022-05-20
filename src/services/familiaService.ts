import { Request, Response, NextFunction } from "express";

var jwt = require ('jsonwebtoken') 

export function seguridad (req:Request, res:Response, next:NextFunction){

    const codigo = req.get("authorization");
    let tokenSeguridad:string = ""; 

    if(codigo && codigo.toLowerCase().startsWith("bearer")){
        tokenSeguridad = codigo.substring(7)
        const decodedTokenSeguridad = jwt.verify(tokenSeguridad, "pedro1234")
        if(!tokenSeguridad || !decodedTokenSeguridad.id){
            return res.status(401).json({
                error: "Clave no encontrada"
            })
        }else{
            if(req.headers["content-type"]!="application/json"){
                return res.status(401).json({
                    error: "cabecera no valida"
                })
            }else{
                next();
            }

        }
    }else{
        return res.status(401).json({
            error: "Código de validación erróneo"
        })
    }

}


