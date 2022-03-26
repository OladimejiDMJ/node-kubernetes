const userController = require("../controllers/controller")
const express = require('express');
const router = express.Router();
router.get('/',userController.myResponse)
module.exports = router;
