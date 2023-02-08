import { Request, Response } from "express";
import { BaseController } from "../../../../../contracts/BaseController";
import { UpdateCategoriasService } from "../service/UpdateCategoriasService";
import { z } from "zod";
import { CategoriaBaseOptional } from "../../../entities/Categoria";

const CreateCategoriasSchema = z.object({
    id: z.string(),
    categoria: z.object({
        nome: z.string().optional(),
        descricao: z.string().optional(),
    }),
});

class UpdateCategoriasController extends BaseController {
    constructor(private updateCategoriasService: UpdateCategoriasService) {
        super();
    }

    async handle(request: Request, response: Response): Promise<Response> {
        const schemaResult = CreateCategoriasSchema.parse(request.body);
        const id = schemaResult.id;
        const categoria: CategoriaBaseOptional = schemaResult.categoria;
        const all = await this.updateCategoriasService.execute(id, categoria);

        return response.json(all);
    }
}

export { UpdateCategoriasController };
