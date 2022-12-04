const Router = require("express");
const router = Router();
const {
  get,
  getById,
  post,
  put,
  patch,
  remove,
} = require("../controllers/product");

// Define each route
router.get("/", get);
router.get("/:id", getById);
router.post("/", post);
router.put("/:id", put);
router.patch("/:id", patch);
router.delete("/:id", remove);

module.exports = router;
