import { IProdutosRepository, ProdutosCreate } from "./repositories/IProdutosRepository";

export class ProdutosCreateService{
    constructor(private produtosRepository:IProdutosRepository){}

   async execute(data:ProdutosCreate){
    const produtos= await this.produtosRepository.findById(data.id)

    if(produtos?.nome===data.nome){
        throw new Error("produtos já existe")
    }

    const produtosCreated= await this.produtosRepository.save(data)

    return produtosCreated;


   }

   async executeDelete(id:string){
    const produtoDeletado=await this.produtosRepository.delete(id)
    return produtoDeletado

   }

   async executeFindAll(){
     const todosProdutos=await this.produtosRepository.findAll()
     return todosProdutos 
   }

   async executeUpdate(id:string, data:ProdutosCreate){
    const produtos= await this.produtosRepository.findById(data.id)

    if(data.id===produtos?.id){
        const produtoUpdate=await this.produtosRepository.update(id,data)
        return produtoUpdate

    }


   }
}