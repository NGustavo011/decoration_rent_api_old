import { Request, Response } from "express";
import { z } from "zod";
import { BaseController } from "../../../../../contracts/BaseController";
import { CategoriaBase } from "../../../entities/Categoria";
import { CreateCategoriasService } from "../service/CreateCategoriasService";

const CreateCategoriasSchema = z.object({
    nome: z.string(),
    descricao: z.string(),
});

class CreateCategoriasController extends BaseController {
    constructor(private createCategoriasService: CreateCategoriasService) {
        super();
    }

    async handle(request: Request, response: Response): Promise<Response> {
        const schemaResult = CreateCategoriasSchema.parse(request.body);
        const categoriaBase: CategoriaBase = {
            nome: schemaResult.nome,
            descricao: schemaResult.descricao,
        };
        const all = await this.createCategoriasService.execute(categoriaBase);
        return response.json(all);
    }
}

export { CreateCategoriasController };
