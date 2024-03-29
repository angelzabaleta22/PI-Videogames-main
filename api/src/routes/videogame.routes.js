const router = require("express").Router();
const videogame = require("./controllers/videogame");

router.route("/:idVideogame").get(videogame.get).delete(videogame.delete);

router.route("/").post(videogame.post);

module.exports = router;
