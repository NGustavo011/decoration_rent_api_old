import { Request, Response } from "express";
import { BaseController } from "../../../../../contracts/BaseController";
import { ListTemasService } from "../service/ListTemasService";

class ListTemasController extends BaseController {
    constructor(private listTemasService: ListTemasService) {
        super();
    }

    async handle(request: Request, response: Response): Promise<Response> {
        const all = await this.listTemasService.execute();
        return response.json(all);
    }
}

export { ListTemasController };
