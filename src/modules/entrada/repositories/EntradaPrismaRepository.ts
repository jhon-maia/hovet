import { prismaClient } from "../../../database/client";
import { EntradaCreate, IEntradaRepository } from "./IEntradaRepository";

export class EntradaPrismaRepository implements IEntradaRepository {
    async findAll(): Promise<EntradaCreate[]> {
        const entrada = await prismaClient.entrada.findMany()

        return entrada as EntradaCreate[]

    }

    async delete(id: string): Promise<null> {
        const entrada = await prismaClient.entrada.delete({
            where: {
                id
            }
        })

        return null;
    }
    async update(id: string, { tipo, quantidade, data, produtoId }: EntradaCreate): Promise<EntradaCreate | undefined> {

        const entrada = await prismaClient.entrada.update(
            {
                where: {

                    id: id
                },
                data: {

                    tipo,
                    quantidade,
                    data,
                    produtoId


                },include: {
                    produto: true
                }
            })

        const entradaUpdate: EntradaCreate = {
            id: entrada.id,
            tipo: entrada.tipo,
            quantidade: entrada.quantidade,
            data: entrada.data,
            produtoId: entrada.produtoId
        }

        return entradaUpdate

    }


    async save({ tipo, quantidade, data, produtoId }: EntradaCreate): Promise<EntradaCreate> {


        const entrada = await prismaClient.entrada.create({
            data: {
                tipo,
                quantidade,
                data,
                produtoId

            }, include: {
                produto: true
            }
        })

        const entradaSave: EntradaCreate = {
            id: entrada.id,
            tipo: entrada.tipo,
            quantidade: entrada.quantidade,
            data: entrada.data,
            produtoId: entrada.produtoId


        }

        return entradaSave;

    }


    async findById(id: string): Promise<EntradaCreate | undefined> {

        const entrada = await prismaClient.entrada.findFirst({
            where: {
                id
            }
        })

        const entradaFound = new Object(entrada);
        return entradaFound as EntradaCreate;
    }
}