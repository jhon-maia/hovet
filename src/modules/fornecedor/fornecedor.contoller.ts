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

    async delete(request:Request,response:Response){
        const FornecedorRepository= new FornecedorPrismaRepository();
        const FornecedorService= new FornecedorCreateService(FornecedorRepository);

        const result=FornecedorService.executeDelete(request.params.id)
        return response.json(result)

    }

    async update(request:Request,response:Response){
        const{body}=request;
        const FornecedorRepository= new FornecedorPrismaRepository();
        const FornecedorService= new FornecedorCreateService(FornecedorRepository);

        const result= await FornecedorService.executeUpdate(request.params.id,body);
        console.log(result);

        return response.json(result);

    }
}