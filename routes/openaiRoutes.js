const express = require("express");
const { genImg } = require("../controllers/openaiController");

const router = express.Router();
router.post("/genimg", genImg);

module.exports = router;
