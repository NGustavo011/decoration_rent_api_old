import { Router } from "express";
import { makeListCategoriasController } from "../modules/categorys/funcs/list";
import { makeCreateCategoriasController } from "../modules/categorys/funcs/create";
import { makeRemoveCategoriasController } from "../modules/categorys/funcs/remove";
import { makeUpdateCategoriasController } from "../modules/categorys/funcs/update";

const categoriasRoutes = Router();

categoriasRoutes.get("/", (request, response) => {
    return makeListCategoriasController().execute(request, response);
});

categoriasRoutes.post("/", (request, response) => {
    return makeCreateCategoriasController().execute(request, response);
});

categoriasRoutes.patch("/", (request, response) => {
    return makeUpdateCategoriasController().execute(request, response);
});

categoriasRoutes.delete("/", (request, response) => {
    return makeRemoveCategoriasController().execute(request, response);
});

export { categoriasRoutes };
