import { ProdutosCreateService } from "./produtos.service";
import { ProdutosPrismaRepository } from "./repositories/produtosPrismaRepository";
import { Request, Response } from "express";


export class ProdutoController{

    async create(request:Request,response:Response){
        
        const{body}=request;
        const ProdutoRepository= new ProdutosPrismaRepository();
        const ProdutoService= new ProdutosCreateService(ProdutoRepository);

        const result= await ProdutoService.execute(body);
        console.log(result);

        return response.json(result);

       
              
    }

    async delete(request:Request,response:Response){
        const ProdutoRepository= new ProdutosPrismaRepository();
        const ProdutoService= new ProdutosCreateService(ProdutoRepository);

        const result=ProdutoService.executeDelete(request.params.id)
        return response.json(result)

    }

    async update(request:Request,response:Response){
        const{body}=request;
        const ProdutoRepository= new ProdutosPrismaRepository();
        const ProdutoService= new ProdutosCreateService(ProdutoRepository);

        const result= await ProdutoService.executeUpdate(request.params.id,body);
        console.log(result);

        return response.json(result);

    }
}