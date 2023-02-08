import { CategoriaBase, CategoriaBD } from "../../../entities/Categoria";
import { CategoriasInterfaceRepository } from "../../../repository/CategoriasInterfaceRepository";

class CreateCategoriasService {
    constructor(private categoriasRepository: CategoriasInterfaceRepository) {}

    async execute(CategoriaBase: CategoriaBase): Promise<CategoriaBD> {
        const categoria = await this.categoriasRepository.create(CategoriaBase);
        return categoria;
    }
}

export { CreateCategoriasService };
