import { v4 as uuidV4 } from "uuid";
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

    constructor() {
        if (!this.id) this.id = uuidV4();
    }
}

export { Pedido };
