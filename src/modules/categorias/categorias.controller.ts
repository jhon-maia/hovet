import { CategoriaPrismaRepository } from './repositories/CategoriaPrismaRepository';
import { Request,Response } from "express";
import { CreateCategoriaService } from './categorias.create.service';

export class CategoriaController{
    async create(request:Request,response:Response){
        const{body} =request
        const prismaRepository=new CategoriaPrismaRepository()
        const createCategoriaService= new CreateCategoriaService(prismaRepository)

        const result= await createCategoriaService.execute(body)
        console.log(result)
        
        return response.json(result)
    }
    async delete(request:Request,response:Response){
        const ProdutoRepository= new CategoriaPrismaRepository();
        const Categoriaervice= new CreateCategoriaService(ProdutoRepository);

        const result=Categoriaervice.executeDelete(request.params.id)
        return response.json(result)

    }

    async update(request:Request,response:Response){
        const{body}=request;
        const ProdutoRepository= new CategoriaPrismaRepository();
        const Categoriaervice= new CreateCategoriaService(ProdutoRepository);

        const result= await Categoriaervice.executeUpdate(request.params.id,body);
        console.log(result);

        return response.json(result);

    }
}