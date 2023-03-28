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
}