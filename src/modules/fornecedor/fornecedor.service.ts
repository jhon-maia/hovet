import { FornecedorCreate, IFornecedorRepository } from "./repositories/IFornecedorRepository";

export class FornecedorCreateService{
    constructor(private fornecedorRepository:IFornecedorRepository){}

    async execute(data:FornecedorCreate){
        const lote= await this.fornecedorRepository.findById(data.id)
        
        if(data.id === lote?.id){

            throw new Error("lote já existente")
        }

        const loteCreated= await this.fornecedorRepository.save(data)


        return loteCreated;

    }
}