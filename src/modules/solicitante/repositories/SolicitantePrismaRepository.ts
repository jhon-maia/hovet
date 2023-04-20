import { prismaClient } from "../../../database/client";
import { ISolicitanteRepository, SolicitanteCreate } from "./ISolicitanteRepository";

export class SolicitantePrismaRepository implements ISolicitanteRepository {

    async findAll(): Promise<SolicitanteCreate[]> {
        const produto = await prismaClient.solicitante.findMany()

        return produto as SolicitanteCreate[]

    }

    async delete(id: string): Promise<null> {
        const produto = await prismaClient.solicitante.delete({
            where: {
                id
            }
        })

        return null;
    }
    async update(id: string, { nome, cpf, email, profissional, telefone }: SolicitanteCreate): Promise<SolicitanteCreate | undefined> {

        const solicitante = await prismaClient.solicitante.update(
            {
                where: {

                    id: id
                },
                data: {

                    nome,
                    cpf,
                    email,
                    profissional,
                    telefone
                },
            })

        const solicitanteUpdate: SolicitanteCreate = {
            id: solicitante.id,
            nome: solicitante.nome,
            cpf: solicitante.cpf,
            email: solicitante.email,
            profissional: solicitante.profissional,
            telefone: solicitante.telefone
        }

        return solicitanteUpdate

    }

    async save({ nome, cpf, email, profissional, telefone }: SolicitanteCreate): Promise<SolicitanteCreate> {

        const solicitante = await prismaClient.solicitante.create(
            {
                data: {

                    nome,
                    cpf,
                    email,
                    profissional,
                    telefone
                },

            })

        const solicitanteSave: SolicitanteCreate = {
            id: solicitante.id,
            nome: solicitante.nome,
            cpf: solicitante.cpf,
            email: solicitante.email,
            profissional: solicitante.profissional,
            telefone: solicitante.telefone
        }

        return solicitanteSave
    }

    async findById(id: string): Promise<SolicitanteCreate | null> {

        const solicitante = await prismaClient.solicitante.findFirst({
            where: {
                id
            }
        })

        const solicitanteFound = new Object(solicitante)

        return solicitanteFound as SolicitanteCreate

    }
}