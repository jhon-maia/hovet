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
    async executeDelete(id:string){
        const produtoDeletado=await this.categoriaRepository.delete(id)
        return produtoDeletado
    
       }
    
       async executeFindAll(){
         const todoscategoria=await this.categoriaRepository.findAll()
         return todoscategoria 
       }
    
       async executeUpdate(id:string, data:CategoriaCreate){
        const categoria= await this.categoriaRepository.findById(data.id)
    
        if(data.id===categoria?.id){
            const produtoUpdate=await this.categoriaRepository.update(id,data)
            return produtoUpdate
    
        }
    
    
       }
}