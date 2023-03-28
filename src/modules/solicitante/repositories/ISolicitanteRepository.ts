export type SolicitanteCreate={
    id:string,
    profissional:string,
    nome:string,
    cpf:string,
    email:string,
    telefone:string
}


export interface ISolicitanteRepository{
    save(data:SolicitanteCreate):Promise<SolicitanteCreate>
    findById(id:string):Promise<SolicitanteCreate|null>
}