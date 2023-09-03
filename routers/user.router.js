const router = require("express").Router();
const userController = require("../controllers/user.controller");
const routeCheck = require("../middleware");
// 64d8825df5ee98c0fc9268b5
router.post("/login", routeCheck, userController.authFunc);
router.get("/:id", routeCheck, userController.getUserById);

module.exports = router;