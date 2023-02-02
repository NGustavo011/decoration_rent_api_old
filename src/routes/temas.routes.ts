import { Router } from "express";
import { makeListTemasController } from "../modules/themes/funcs/list";
import { makeCreateTemasController } from "../modules/themes/funcs/create";
import { makeRemoveTemasController } from "../modules/themes/funcs/remove";
import { makeUpdateTemasController } from "../modules/themes/funcs/update";

const temasRoutes = Router();

temasRoutes.get("/", (request, response) => {
    return makeListTemasController().execute(request, response);
});

temasRoutes.post("/", (request, response) => {
    return makeCreateTemasController().execute(request, response);
});

temasRoutes.patch("/", (request, response) => {
    return makeUpdateTemasController().execute(request, response);
});

temasRoutes.delete("/", (request, response) => {
    return makeRemoveTemasController().execute(request, response);
});

export { temasRoutes };
