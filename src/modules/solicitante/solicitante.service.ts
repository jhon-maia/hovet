import { ISolicitanteRepository, SolicitanteCreate } from "./repositories/ISolicitanteRepository";

export class SolicitanteCreateService{
    constructor(private solicitanteRepository:ISolicitanteRepository){}

    async execute(data:SolicitanteCreate){
        const lote= await this.solicitanteRepository.findById(data.id)
        
        if(data.id === lote?.id){

            throw new Error("lote já existente")
        }

        const solicitanteCreated= await this.solicitanteRepository.save(data)


        return solicitanteCreated;

    }
}