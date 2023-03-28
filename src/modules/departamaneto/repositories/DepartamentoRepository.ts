import { DepartamentoCreate, IDeparatamentoRepository } from "./IDepartamentoPrismaRepository";
import { prismaClient } from "../../../database/client";


export class DepartamentoPrismaRepository implements IDeparatamentoRepository {

    async save({ nome, categoriaId }: DepartamentoCreate): Promise<DepartamentoCreate | undefined> {

        const departamento = await prismaClient.departamento.create(
            {
                data:{

                    nome,
                    categoriaId
                },
                include: {
                    categoria: true
                }
            })

        const departamentoSave: DepartamentoCreate = {
            id: departamento.id,
            nome: departamento.nome,
            categoriaId: departamento.categoriaId,
            categoria:departamento.categoria
        }
     
        return departamentoSave
    }

    async findById(id: string): Promise<DepartamentoCreate | null> {

        const departamento = await prismaClient.departamento.findFirst({
            where: {
                id
            }
        })

        const departamentoFound = new Object(departamento)

        return departamentoFound as DepartamentoCreate

    }
}