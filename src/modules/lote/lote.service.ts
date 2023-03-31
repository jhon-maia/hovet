import { ILoteRepository, LoteCreate } from "./repositories/ILoteRepository";

export class LoteCreateService{
    constructor(private loteRepository:ILoteRepository){}

    async execute(data:LoteCreate){
        const lote= await this.loteRepository.findById(data.id)
        
        if(data.numero === lote?.numero){

            throw new Error("lote já existente")
        }
        data.dataFabricacaco=new Date(data.dataFabricacaco)
        data.dataValidade=new Date(data.dataValidade)
        const loteCreated= await this.loteRepository.save(data)


        return loteCreated;

    }
}