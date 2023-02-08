import {
    ProdutoBase,
    ProdutoBaseOptional,
    ProdutoBD,
    ProdutoCompletedBD,
} from "../entities/Produto";

interface ProdutosInterfaceRepository {
    list(): Promise<ProdutoCompletedBD[]>;
    create(produto: ProdutoBase): Promise<ProdutoBD>;
    update(id: string, produto: ProdutoBaseOptional): Promise<ProdutoBD>;
    remove(id: string): Promise<ProdutoCompletedBD>;
}

export { ProdutosInterfaceRepository };
