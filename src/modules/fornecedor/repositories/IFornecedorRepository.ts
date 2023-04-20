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
    findAll():Promise<FornecedorCreate[]>;
    delete(id:string):Promise<null>;
    update(id:string,data:FornecedorCreate):Promise<FornecedorCreate|undefined>
}