export type FuncionarioCreate={
    id:string
    nome:string,
    senha:string,
    email:string
    cpf:string
}


export interface IFuncionarioRepository{
    save(data:FuncionarioCreate):Promise<FuncionarioCreate>;
    findByCpf(id:string):Promise<FuncionarioCreate | null>;

};