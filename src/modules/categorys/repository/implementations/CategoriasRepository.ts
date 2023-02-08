import { PrismaClient } from "@prisma/client";
import { CategoriasInterfaceRepository } from "../CategoriasInterfaceRepository";
import { prisma } from "../../../../database";
import {
    CategoriaBase,
    CategoriaBaseOptional,
    CategoriaBD,
} from "../../entities/Categoria";

class CategoriasRepository implements CategoriasInterfaceRepository {
    private repository: PrismaClient;

    constructor() {
        this.repository = prisma;
    }

    async list(): Promise<CategoriaBD[]> {
        return await this.repository.categoria.findMany();
    }

    async create(categoria: CategoriaBase): Promise<CategoriaBD> {
        return await this.repository.categoria.create({
            data: categoria,
        });
    }

    async update(
        id: string,
        categoria: CategoriaBaseOptional
    ): Promise<CategoriaBD> {
        return await this.repository.categoria.update({
            where: { id },
            data: categoria,
        });
    }

    async remove(id: string): Promise<CategoriaBD> {
        return await this.repository.categoria.delete({ where: { id } });
    }
}

export { CategoriasRepository };
