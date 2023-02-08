import { CategoriaBD } from "../../categorys/entities/Categoria";
import { TemaBD } from "../../themes/entities/Tema";

class ProdutoBase {
    nome: string;
    descricao: string;
    preco_bruto: number;
    preco_liquido: number;
    imagem_url: string;
    categoria_id: string;
    tema_id: string;
}

type ProdutoBaseOptional = Partial<ProdutoBase>;

class ProdutoBD extends ProdutoBase {
    id: string;
    criacao: Date;
}

class ProdutoCompletedBD extends ProdutoBD {
    categoria: CategoriaBD;
    tema: TemaBD;
}

export { ProdutoBase, ProdutoBaseOptional, ProdutoBD, ProdutoCompletedBD };
