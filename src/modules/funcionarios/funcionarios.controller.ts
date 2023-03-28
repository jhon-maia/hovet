import { CreateFuncionarioService } from "./funcionarios.create.service";
import { FuncionarioPrismaRepository } from "./repositories/FuncionarioPrismaRepository";
import {Request,Response} from "express";

export class FuncionarioController{

     async create(request:Request,response:Response){
        const{body}=request;
        const prismaRepository= new FuncionarioPrismaRepository();
        const createFuncionarioService = new CreateFuncionarioService(prismaRepository);

        const result= await createFuncionarioService.execute(body)
        

        return response.json(result);
     }


}