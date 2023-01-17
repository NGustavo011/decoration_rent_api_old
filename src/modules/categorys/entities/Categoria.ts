import { Produto } from "../../products/entities/Produto";

class Categoria {
    id?: string;
    nome: string;
    descricao: string;
    criacao: Date;
    produtos: Produto[];
}

export { Categoria };
