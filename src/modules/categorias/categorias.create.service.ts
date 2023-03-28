import { CategoriaCreate,ICategoriaRepository } from "./repositories/ICategoriaRepository";

export class CreateCategoriaService{

    constructor(private categoriaRepository:ICategoriaRepository){}

    async execute(data:CategoriaCreate){
        const categoria= await this.categoriaRepository.findById(data.id)

        if(categoria?.nome===data.nome){
            throw new Error("categoria com esse nome já existe ")
        }

        const categoriaCreated= await this.categoriaRepository.save(data)
        return categoriaCreated
    }
}