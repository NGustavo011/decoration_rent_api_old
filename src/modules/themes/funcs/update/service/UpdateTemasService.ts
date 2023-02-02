import { TemaBaseOptional, TemaBD } from "../../../entities/Tema";
import { TemasInterfaceRepository } from "../../../repository/TemasInterfaceRepository";

class UpdateTemasService {
    constructor(private temasRepository: TemasInterfaceRepository) {}

    async execute(id: string, tema: TemaBaseOptional): Promise<TemaBD> {
        const temaUpdated = await this.temasRepository.update(id, tema);
        return temaUpdated;
    }
}

export { UpdateTemasService };
