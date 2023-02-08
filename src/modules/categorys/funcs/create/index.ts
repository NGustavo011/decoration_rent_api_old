import { CategoriasRepository } from "../../repository/implementations/CategoriasRepository";
import { CreateCategoriasService } from "./service/CreateCategoriasService";
import { CreateCategoriasController } from "./controller/CreateCategoriasController";

const makeCreateCategoriasController = (): CreateCategoriasController => {
    const categoriasRepository = new CategoriasRepository();

    const createCategoriasService = new CreateCategoriasService(
        categoriasRepository
    );

    return new CreateCategoriasController(createCategoriasService);
};

export { makeCreateCategoriasController };
