import {
    CategoriaBaseOptional,
    CategoriaBD,
} from "../../../entities/Categoria";
import { CategoriasInterfaceRepository } from "../../../repository/CategoriasInterfaceRepository";

class UpdateCategoriasService {
    constructor(private categoriasRepository: CategoriasInterfaceRepository) {}

    async execute(
        id: string,
        categoria: CategoriaBaseOptional
    ): Promise<CategoriaBD> {
        const categoriaUpdated = await this.categoriasRepository.update(
            id,
            categoria
        );
        return categoriaUpdated;
    }
}

export { UpdateCategoriasService };
