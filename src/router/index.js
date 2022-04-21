import { Router } from "express";
import UserController from "../controllers/user-controller.js";
import SessionController from "../controllers/session-controllers.js";
import TicketController from "../controllers/ticket-controller.js";
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

router.get("/sessions", authMiddleware, SessionController.getAll);
router.get("/sessions/:id", authMiddleware, SessionController.getOne);

router.get("/tickets/:id", TicketController.getAll);
router.post("/tickets", TicketController.create);
router.post("/tickets/:id", TicketController.delete);

export default router;
