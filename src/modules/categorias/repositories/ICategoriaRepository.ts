export type CategoriaCreate={
    id:string,
    nome:string
}

export interface ICategoriaRepository{
    save(data:CategoriaCreate):Promise<CategoriaCreate>
    findById(id:string):Promise<CategoriaCreate|null>
    
}