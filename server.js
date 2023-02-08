const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 2323;
const employeesRoute = require("./routes/employees.route");
const calenderRoute = require("./routes/calender.route");
const requestsRoute = require("./routes/requests.route");

const app = express();
app.use(cors());
app.use(express.json());
app.use(employeesRoute);
app.use(calenderRoute);
app.use(requestsRoute);

app.get("/", async (req, res) => {
  res.send(`
  <a href="http://localhost:2323/employees">emplyees</a>
  <a href="http://localhost:2323/calendar">calendar</a>
  <a href="http://localhost:2323/requests">requests</a>
  
  `);
});

app.listen(PORT, () => {
  console.log("server is running");
});
