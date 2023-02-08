import { PrismaClient } from "@prisma/client";
import { TemasInterfaceRepository } from "../TemasInterfaceRepository";
import { prisma } from "../../../../database";
import { TemaBase, TemaBaseOptional, TemaBD } from "../../entities/Tema";

class TemasRepository implements TemasInterfaceRepository {
    private repository: PrismaClient;

    constructor() {
        this.repository = prisma;
    }

    async list(): Promise<TemaBD[]> {
        return await this.repository.tema.findMany();
    }

    async create(tema: TemaBase): Promise<TemaBD> {
        return await this.repository.tema.create({
            data: tema,
        });
    }

    async update(id: string, tema: TemaBaseOptional): Promise<TemaBD> {
        return await this.repository.tema.update({
            where: { id },
            data: tema,
        });
    }

    async remove(id: string): Promise<TemaBD> {
        return await this.repository.tema.delete({ where: { id } });
    }
}

export { TemasRepository };
