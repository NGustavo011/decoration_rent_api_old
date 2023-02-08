import { CategoriasRepository } from "../../repository/implementations/CategoriasRepository";
import { RemoveCategoriasService } from "./service/RemoveCategoriasService";
import { RemoveCategoriasController } from "./controller/RemoveCategoriasController";

const makeRemoveCategoriasController = (): RemoveCategoriasController => {
    const categoriaRepository = new CategoriasRepository();

    const removeCategoriasService = new RemoveCategoriasService(
        categoriaRepository
    );

    return new RemoveCategoriasController(removeCategoriasService);
};

export { makeRemoveCategoriasController };
