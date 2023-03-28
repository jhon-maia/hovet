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
}