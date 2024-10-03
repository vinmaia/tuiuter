import { Router } from "express";
import authenticator from "../middlewares/authenticator.js";
import {
  destroy,
  show,
  store,
  index,
  update,
} from "../controllers/post-controller.js";
const router = Router();

//rotas públicas
router.get("/", index);
router.get("/:id", show);

router.use(authenticator);

//rotas privadas
router.post("/", store);
router.put("/:id", update);
router.delete("/:id", destroy);

export default router;
