const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("User list");
});

router.get("/new", (req, res) => {
  res.send("New user form");
});

router.post("/", (req, res) => {
  res.send("Create user");
});

// Re-written below to use only 1 route definition '.route("/:id")'
// with get, put & delete chained on afterwards
//
// router.get("/:id", (req, res) => {
//   req.params.id;
//   res.send(`Get user with ID: ${req.params.id}`);
// });

// router.put("/:id", (req, res) => {
//   req.params.id;
//   res.send(`Update user with ID: ${req.params.id}`);
// });

// router.delete("/:id", (req, res) => {
//   req.params.id;
//   res.send(`Delete user with ID: ${req.params.id}`);
// });

router
  .route("/:id")
  .get((req, res) => {
    req.params.id;
    res.send(`Get user with ID: ${req.params.id}`);
  })
  .put((req, res) => {
    req.params.id;
    res.send(`Update user with ID: ${req.params.id}`);
  })
  .delete((req, res) => {
    req.params.id;
    res.send(`Delete user with ID: ${req.params.id}`);
  });

module.exports = router;
