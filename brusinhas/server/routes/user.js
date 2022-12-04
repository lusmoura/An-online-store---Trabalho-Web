const Router = require("express");
const router = Router();
const {
  getAll,
  getByEmail,
  login,
  post,
  put,
  remove,
} = require("../controllers/user");

// Define each route
router.get("/", getAll);
router.get("/:email", getByEmail);
router.post("/login/:email", login);
router.post("/", post);
router.put("/:email", put);
router.delete("/:email", remove);

module.exports = router;
