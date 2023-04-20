import { prismaClient} from '../../../database/client';
import { CategoriaCreate,ICategoriaRepository } from "./ICategoriaRepository";

export class CategoriaPrismaRepository implements ICategoriaRepository{
    async findAll(): Promise<CategoriaCreate[]> {
        const produto = await prismaClient.produto.findMany()

        return produto as CategoriaCreate[]

    }

    async delete(id: string): Promise<null> {
        const produto = await prismaClient.produto.delete({
            where: {
                id
            }
        })

        return null;
    }
   async  update(id: string, {nome}: CategoriaCreate): Promise<CategoriaCreate | undefined> {

    const categoria = await prismaClient.produto.update(
        {
            where:{

               id:id
            },
             data: {
               
                nome,
            }
        })

        const categoriaUpdate: CategoriaCreate = {
            id:categoria.id,
            nome:categoria.nome
        }
     
        return categoriaUpdate
        
    }


    async save({nome}:CategoriaCreate):Promise<CategoriaCreate>{

        const categoria= await prismaClient.categoria.create({data:{
            nome,
        }});

        const categoriaSave:CategoriaCreate={
            id:categoria.id,
            nome:categoria.nome
        }

        return categoriaSave

    }

    async findById(id: string): Promise<CategoriaCreate | null> {

        const categoria=await prismaClient.categoria.findFirst({where:{
            id
        }})
        
        const categoriaFound=new Object(categoria)
        return categoriaFound as CategoriaCreate
    }
}