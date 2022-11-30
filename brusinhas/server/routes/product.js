const Router = require("express");
const router = Router();
const { get, getById, post, put, remove } = require("../controllers/product");

// Define each route
router.get("/", get);
router.get("/:id", getById);
router.post("/", post);
router.put("/:id", put);
router.delete("/:id", remove);

module.exports = router;
