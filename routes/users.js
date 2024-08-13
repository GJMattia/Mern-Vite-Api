const express = require("express");
const router = express.Router();
const usersCtrl = require("../controllers/users");
const ensureLoggedIn = require("../config/ensureLoggedIn");

router.post("/", usersCtrl.create);
router.post("/login", usersCtrl.login);
router.put("/verify", usersCtrl.verify);
router.get("/check-token", ensureLoggedIn, usersCtrl.checkToken);

module.exports = router;
