import { TemaBase, TemaBaseOptional, TemaBD } from "../entities/Tema";

interface TemasInterfaceRepository {
    list(): Promise<TemaBD[]>;
    create(tema: TemaBase): Promise<TemaBD>;
    update(id: string, tema: TemaBaseOptional): Promise<TemaBD>;
    remove(id: string): Promise<TemaBD>;
}

export { TemasInterfaceRepository };
