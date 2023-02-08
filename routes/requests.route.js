const express = require("express");
const requestsServer = require("../server/requests");

const router = express.Router();

router.get("/requests", async (req, res) => {
  setTimeout(() => {
    res.status(201).json(requestsServer);
  }, 1000);
});

router.get("/requests/:id", async (req, res) => {
  let request = requestsServer.find((r) => {
    r.id == req.params.id;
  });

  if (request) {
    res.json(request);
  } else {
    res.send(`cannot find request with id ${req.params.id}`);
  }
});

router.post("requests", async (req, res) => {
  const newRequest = {
    id: requestsServer.length + 1,
    from: req.body.from,
    month: req.body.month,
    date: req.body.date,
    reason: req.body.reasoning,
    length: req.body.legnth,
  };
  try {
    requestsServer.push(newRequest);
    req.status(201).json(newRequest);
  } catch (err) {
    res.send({ error: err.message });
  }
});

module.exports = router;
