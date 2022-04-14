const Router = require("express").Router;
const UserController = require("../controllers/user-controller");
const HallController = require("../controllers/hall-controllers");
const router = new Router();

const { body } = require("express-validator");
const authMiddleware = require("../middlewares/auth-middleware");

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

module.exports = router;
