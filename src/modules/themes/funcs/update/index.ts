import { TemasRepository } from "../../repository/implementations/TemasRepository";
import { UpdateTemasService } from "./service/UpdateTemasService";
import { UpdateTemasController } from "./controller/UpdateTemasController";

const makeUpdateTemasController = (): UpdateTemasController => {
    const temasRepository = new TemasRepository();

    const updateTemasService = new UpdateTemasService(temasRepository);

    return new UpdateTemasController(updateTemasService);
};

export { makeUpdateTemasController };
