export type FornecedorCreate={
    id:string
    nome:string,
    cnpj:string,
    email:string,
    telefone:string
}


export interface IFornecedorRepository{
    save(data:FornecedorCreate):Promise<FornecedorCreate>
    findById(id:string):Promise<FornecedorCreate|undefined>
}