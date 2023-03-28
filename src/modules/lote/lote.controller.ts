import { LoteCreateService } from './lote.service';
import { LotePrismaRepository } from './repositories/LotePrisma.Repository';
import { Request, Response } from "express";

export class LoteController{

    async create(request:Request,response:Response){
        const {body}=request;
        const loteRepository=new LotePrismaRepository();
        const loteService=new LoteCreateService(loteRepository);




        const result= await  loteService.execute(body)
        console.log(result)
        return response.json(result)
    }
}