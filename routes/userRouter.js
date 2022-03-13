const Router = require("express");
const router = new Router();
const userController = require("../controllers/userController");

router.post("/create-user", userController.createUser);
router.post("/get-user", userController.getUser);

module.exports = router;
