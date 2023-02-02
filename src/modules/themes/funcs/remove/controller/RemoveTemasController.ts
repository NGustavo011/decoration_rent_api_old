import { Request, Response } from "express";
import { BaseController } from "../../../../../contracts/BaseController";
import { RemoveTemasService } from "../service/RemoveTemasService";
import { z } from "zod";

const CreateTemasSchema = z.object({
    id: z.string(),
});

class RemoveTemasController extends BaseController {
    constructor(private removeTemasService: RemoveTemasService) {
        super();
    }

    async handle(request: Request, response: Response): Promise<Response> {
        const schemaResult = CreateTemasSchema.parse(request.body);
        const id = schemaResult.id;
        const all = await this.removeTemasService.execute(id);

        return response.json(all);
    }
}

export { RemoveTemasController };
