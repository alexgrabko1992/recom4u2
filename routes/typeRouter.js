const Router = require("express");
const router = new Router();
const typeController = require("../controllers/typeController");

router.post("/create-type", typeController.createType);
router.get("/get-type", typeController.getType);

module.exports = router;
