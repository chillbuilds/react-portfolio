const router = require("express").Router();
const botRoutes = require("./bots");

router.use("/bots", botRoutes);

module.exports = router;