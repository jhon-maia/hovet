import { prismaClient} from '../../../database/client';
import { CategoriaCreate,ICategoriaRepository } from "./ICategoriaRepository";

export class CategoriaPrismaRepository implements ICategoriaRepository{

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