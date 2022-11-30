const Router = require("express");
const router = Router();
const { get, getById, post, put, remove } = require("../controllers/user");

// Define each route
router.get("/", (req, res) => {
  get(req, res);
});
router.get("/:id", (req, res) => {
  getById(req, res);
});
router.post("/", post);
router.put("/:id", put);
router.delete("/:id", remove);

module.exports = router;
