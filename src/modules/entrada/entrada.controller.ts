import { EntradaCreateService } from "./entrada.service";
import { Request, Response } from "express";
import { EntradaPrismaRepository } from "./repositories/EntradaPrismaRepository";


export class EntradaContoller{

    async create(request:Request,response:Response){
        const {body}=request;
        const entradaRepository=new EntradaPrismaRepository()
        const entradaService= new EntradaCreateService(entradaRepository)

        const result= await entradaService.execute(body)
         
        console.log(result)
        return response.json(result);
    }
}