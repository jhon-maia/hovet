import { FornecedorCreate, IFornecedorRepository } from "./repositories/IFornecedorRepository";

export class FornecedorCreateService{
    constructor(private fornecedorRepository:IFornecedorRepository){}

    async execute(data:FornecedorCreate){
        const fornecedor= await this.fornecedorRepository.findById(data.id)
        
        if(data.email === fornecedor?.email){

            throw new Error("fornecedor já existente")
        }

        const fornecedorCreated= await this.fornecedorRepository.save(data)


        return fornecedorCreated;

    }

    async executeDelete(id:string){
        const produtoDeletado=await this.fornecedorRepository.delete(id)
        return produtoDeletado
    
       }
    
       async executeFindAll(){
         const todosfornecedor=await this.fornecedorRepository.findAll()
         return todosfornecedor 
       }
    
       async executeUpdate(id:string, data:FornecedorCreate){
        const fornecedor= await this.fornecedorRepository.findById(data.id)
    
        if(data.id===fornecedor?.id){
            const produtoUpdate=await this.fornecedorRepository.update(id,data)
            return produtoUpdate
    
        }
    
    
       }
}