const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  console.log(req.query.name);
  res.send("User list");
});

router.get("/new", (req, res) => {
  // res.send("New user form");
  res.render("users/new");
});

router.post("/", (req, res) => {
  // res.send("Create user");
  const isValid = false;

  if (isValid) {
    users.push({ firstName: req.body.firstName });
    res.redirect(`/users/${users.length - 1}`);
  } else {
    console.log("Error!");
    res.render("users/new", { firstName: req.body.firstName });
  }
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
    // console.log(req.user);
    res.send(`Get user with ID: ${req.params.id}`);
  })
  .put((req, res) => {
    res.send(`Update user with ID: ${req.params.id}`);
  })
  .delete((req, res) => {
    res.send(`Delete user with ID: ${req.params.id}`);
  });

// Use param to set the user based on the id provided
// this is then used in the next step (above)

const users = [{ name: "Kyle" }, { name: "Sally" }];
router.param("id", (req, res, next, id) => {
  req.user = users[id];
  next();
});

module.exports = router;
