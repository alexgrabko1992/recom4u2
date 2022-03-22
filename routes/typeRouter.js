const Router = require("express");
const router = new Router();
const typeController = require("../controllers/typeController");

router.post("/create-type", typeController.createType);
router.post("/get-type", typeController.getTypeById);
router.get("/get-types", typeController.getType);

module.exports = router;
