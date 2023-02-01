import { Categoria } from "../../categorys/entities/Categoria";
import { Tema } from "../../themes/entities/Tema";

class ProdutoBase {
    nome: string;
    descricao: string;
    preco_bruto: number;
    preco_liquido: number;
    imagem_url: string;
    categoria_id: string;
    tema_id: string;
}

class ProdutoCreated extends ProdutoBase {
    id: string;
    criacao: Date;
}

export { ProdutoBase, ProdutoCreated };
