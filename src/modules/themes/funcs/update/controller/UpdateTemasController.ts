import { Request, Response } from "express";
import { BaseController } from "../../../../../contracts/BaseController";
import { UpdateTemasService } from "../service/UpdateTemasService";
import { z } from "zod";
import { TemaBaseOptional } from "../../../entities/Tema";

const CreateTemasSchema = z.object({
    id: z.string(),
    tema: z.object({
        nome: z.string().optional(),
        descricao: z.string().optional(),
    }),
});

class UpdateTemasController extends BaseController {
    constructor(private updateTemasService: UpdateTemasService) {
        super();
    }

    async handle(request: Request, response: Response): Promise<Response> {
        const schemaResult = CreateTemasSchema.parse(request.body);
        const id = schemaResult.id;
        const tema: TemaBaseOptional = schemaResult.tema;
        const all = await this.updateTemasService.execute(id, tema);

        return response.json(all);
    }
}

export { UpdateTemasController };
