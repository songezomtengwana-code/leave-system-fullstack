const express = require("express");
const employessServer = require("../server/employees");

const router = express.Router();

router.get("/employees", async (req, res) => {
  setTimeout(() => {
    res.status(201).json(employessServer);
  }, 250);
});

router.get("/employees/:name", async (req, res) => {
  let employee = employessServer.find((e) => {
    e.firstName == req.params.name;
  });

  if (employee) {
    res.json(employee);
  } else {
    res.send(`cannot find employee with id ${req.params.id}`);
  }
});

module.exports = router;
