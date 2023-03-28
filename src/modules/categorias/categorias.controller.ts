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
}