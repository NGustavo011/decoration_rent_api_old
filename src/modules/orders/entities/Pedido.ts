import { Usuario } from "../../accounts/entities/Usuario";

class Pedido {
    id?: string;
    usuario_id: string;
    usuario: Usuario;
    criacao: Date;
    atualizacao: Date;
    status: string;
    total: number;
    produtos_pedido;
}

export { Pedido };
