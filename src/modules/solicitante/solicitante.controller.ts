import { SolicitantePrismaRepository } from "./repositories/SolicitantePrismaRepository";
import { SolicitanteCreateService } from "./solicitante.service";
import { Request, Response } from "express";

export class SolicitanteController{

    async create(request:Request,response:Response){
        const {body}=request;
        const solicitanteRepository=new SolicitantePrismaRepository();
        const solicitanteService=new SolicitanteCreateService(solicitanteRepository);




        const result= await  solicitanteService.execute(body)
        console.log(result)
        return response.json(result)
    }
}