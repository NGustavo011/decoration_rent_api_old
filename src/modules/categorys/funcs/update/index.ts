import { CategoriasRepository } from "../../repository/implementations/CategoriasRepository";
import { UpdateCategoriasService } from "./service/UpdateCategoriasService";
import { UpdateCategoriasController } from "./controller/UpdateCategoriasController";

const makeUpdateCategoriasController = (): UpdateCategoriasController => {
    const categoriasRepository = new CategoriasRepository();

    const updateCategoriasService = new UpdateCategoriasService(
        categoriasRepository
    );

    return new UpdateCategoriasController(updateCategoriasService);
};

export { makeUpdateCategoriasController };
