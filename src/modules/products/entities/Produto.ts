import { Categoria } from "../../categorys/entities/Categoria";
import { Tema } from "../../themes/entities/Tema";

class Produto {
    id?: string;
    nome: string;
    descricao: string;
    precoBruto: number;
    precoLiquido: number;
    criacao: Date;
    imagemUrl: string;
    categoria_id: string;
    categoria: Categoria;
    tema_id: string;
    tema: Tema;
}

export { Produto };
