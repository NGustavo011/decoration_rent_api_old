import { CategoriasRepository } from "../../repository/implementations/CategoriasRepository";
import { ListCategoriasService } from "./service/ListCategoriasService";
import { ListCategoriasController } from "./controller/ListCategoriasController";

const makeListCategoriasController = (): ListCategoriasController => {
    const categoriasRepository = new CategoriasRepository();

    const listCategoriasService = new ListCategoriasService(
        categoriasRepository
    );

    return new ListCategoriasController(listCategoriasService);
};

export { makeListCategoriasController };
