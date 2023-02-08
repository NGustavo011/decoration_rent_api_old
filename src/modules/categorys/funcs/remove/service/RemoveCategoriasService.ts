import { CategoriaBD } from "../../../entities/Categoria";
import { CategoriasInterfaceRepository } from "../../../repository/CategoriasInterfaceRepository";

class RemoveCategoriasService {
    constructor(private categoriasRepository: CategoriasInterfaceRepository) {}

    async execute(id: string): Promise<CategoriaBD> {
        const categoria = await this.categoriasRepository.remove(id);
        return categoria;
    }
}

export { RemoveCategoriasService };
