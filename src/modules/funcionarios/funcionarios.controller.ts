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

     async delete(request:Request,response:Response){
      const FuncionarioRepository= new FuncionarioPrismaRepository();
      const FuncionarioService= new CreateFuncionarioService(FuncionarioRepository);

      const result=FuncionarioService.executeDelete(request.params.id)
      return response.json(result)

  }

  async update(request:Request,response:Response){
      const{body}=request;
      const FuncionarioRepository= new FuncionarioPrismaRepository();
      const FuncionarioService= new CreateFuncionarioService(FuncionarioRepository);

      const result= await FuncionarioService.executeUpdate(request.params.id,body);
      console.log(result);

      return response.json(result);

  }


}