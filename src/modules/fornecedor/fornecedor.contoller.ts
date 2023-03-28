import { FornecedorCreateService } from "./fornecedor.service";
import { FornecedorPrismaRepository } from "./repositories/FornecedorPrismaRepository";
import { Request, Response } from "express";


export class FornecedorController{

    async create(request:Request,response:Response){
        const {body}=request;
        const fornecedorRepository=new FornecedorPrismaRepository();
        const fornecedorService=new FornecedorCreateService(fornecedorRepository);




        const result= await  fornecedorService.execute(body)
        console.log(result)
        return response.json(result)
    }
}