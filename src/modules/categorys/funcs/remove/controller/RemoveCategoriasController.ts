import { Request, Response } from "express";
import { BaseController } from "../../../../../contracts/BaseController";
import { RemoveCategoriasService } from "../service/RemoveCategoriasService";
import { z } from "zod";

const CreateCategoriasSchema = z.object({
    id: z.string(),
});

class RemoveCategoriasController extends BaseController {
    constructor(private removeCategoriasService: RemoveCategoriasService) {
        super();
    }

    async handle(request: Request, response: Response): Promise<Response> {
        const schemaResult = CreateCategoriasSchema.parse(request.body);
        const id = schemaResult.id;
        const all = await this.removeCategoriasService.execute(id);

        return response.json(all);
    }
}

export { RemoveCategoriasController };
