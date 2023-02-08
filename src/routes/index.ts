import { Router } from "express";
import { categoriasRoutes } from "./categorias.routes";
import { produtosRoutes } from "./produtos.routes";
import { temasRoutes } from "./temas.routes";

const router = Router();

router.use("/produtos", produtosRoutes);
router.use("/temas", temasRoutes);
router.use("/categorias", categoriasRoutes);

export { router };
