import { CategoriaBD } from "../../../entities/Categoria";
import { CategoriasInterfaceRepository } from "../../../repository/CategoriasInterfaceRepository";

class ListCategoriasService {
    constructor(private categoriasRepository: CategoriasInterfaceRepository) {}

    async execute(): Promise<CategoriaBD[]> {
        const categoria = await this.categoriasRepository.list();
        return categoria;
    }
}

export { ListCategoriasService };
