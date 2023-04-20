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
    async delete(request:Request,response:Response){
        const EntradaRepository= new EntradaPrismaRepository();
        const Entradaervice= new EntradaCreateService(EntradaRepository);

        const result=Entradaervice.executeDelete(request.params.id)
        return response.json(result)

    }

    async update(request:Request,response:Response){
        const{body}=request;
        const EntradaRepository= new EntradaPrismaRepository();
        const Entradaervice= new EntradaCreateService(EntradaRepository);

        const result= await Entradaervice.executeUpdate(request.params.id,body);
        console.log(result);

        return response.json(result);

    }
}