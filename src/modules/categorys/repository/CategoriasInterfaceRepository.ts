import {
    CategoriaBase,
    CategoriaBaseOptional,
    CategoriaBD,
} from "../entities/Categoria";

interface CategoriasInterfaceRepository {
    list(): Promise<CategoriaBD[]>;
    create(categoria: CategoriaBase): Promise<CategoriaBD>;
    update(id: string, categoria: CategoriaBaseOptional): Promise<CategoriaBD>;
    remove(id: string): Promise<CategoriaBD>;
}

export { CategoriasInterfaceRepository };
