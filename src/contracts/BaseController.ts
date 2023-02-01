import { Request, Response } from "express";

abstract class BaseController {
    async execute(request: Request, response: Response): Promise<Response> {
        try {
            return this.handle(request, response);
        } catch (error) {
            console.log(error);
        }
    }

    abstract handle(request: Request, response: Response): Promise<Response>;
}

export { BaseController };
