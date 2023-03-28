import { Request, Response } from "express";
import { DepartamentoCreateService } from "./departamento.service";
import { DepartamentoPrismaRepository } from "./repositories/DepartamentoRepository";


export class DepartamentoController{

    async create(request:Request,response:Response){
        
        const{body}=request;
        const departamentoRepository= new DepartamentoPrismaRepository();
        const departamentoService= new DepartamentoCreateService(departamentoRepository);

        const result= await departamentoService.execute(body);
        console.log(result);

        return response.json(result);

       
              
    }
}