import { ILoteRepository, LoteCreate } from "./repositories/ILoteRepository";

export class LoteCreateService{
    constructor(private loteRepository:ILoteRepository){}

    async execute(data:LoteCreate){
        const lote= await this.loteRepository.findById(data.id)
        
        if(data.id === lote?.id){

            throw new Error("lote já existente")
        }

        const loteCreated= await this.loteRepository.save(data)


        return loteCreated;

    }
}