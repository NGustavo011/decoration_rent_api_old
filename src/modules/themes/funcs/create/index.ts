import { TemasRepository } from "../../repository/implementations/TemasRepository";
import { CreateTemasService } from "./service/CreateTemasService";
import { CreateTemasController } from "./controller/CreateTemasController";

const makeCreateTemasController = (): CreateTemasController => {
    const temasRepository = new TemasRepository();

    const createTemasService = new CreateTemasService(temasRepository);

    return new CreateTemasController(createTemasService);
};

export { makeCreateTemasController };
