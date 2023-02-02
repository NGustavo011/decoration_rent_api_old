import { TemaBase, TemaBD } from "../../../entities/Tema";
import { TemasInterfaceRepository } from "../../../repository/TemasInterfaceRepository";

class CreateTemasService {
    constructor(private temasRepository: TemasInterfaceRepository) {}

    async execute(TemaBase: TemaBase): Promise<TemaBD> {
        const tema = await this.temasRepository.create(TemaBase);
        return tema;
    }
}

export { CreateTemasService };
