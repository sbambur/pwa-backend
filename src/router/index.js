import { Router } from "express";
import UserController from "../controllers/user-controller.js";
import HallController from "../controllers/hall-controllers.js";
import { body } from "express-validator";
import authMiddleware from "../middlewares/auth-middleware.js";

const router = new Router();

router.post(
  "/registration",
  body("email").isEmail(),
  body("password").isLength({ min: 5, max: 32 }),
  UserController.registration
);
router.post("/login", UserController.login);
router.post("/logout", UserController.logout);
router.get("/active/:link", UserController.activate);
router.get("/refresh", UserController.refresh);
router.get("/users", authMiddleware, UserController.getUsers);

router.get("/halls", authMiddleware, HallController.getAll);
router.get("/halls/:id", authMiddleware, HallController.getOne);
router.put("/halls", authMiddleware, HallController.update);

export default router;
