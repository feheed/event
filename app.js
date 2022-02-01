const express = require("express");
const connectDB = require("./db/database");
const eventRouter = require("./apis/events/routes");
const { use } = require("./apis/events/routes");
const app = express();
app.use(express.json());

app.use((req, res, next) => {
  console.log(`${req.method} ${req.protocol}://${req.get("host")}${req.path}`);
  next();
});
app.use("/api/event", eventRouter);

app.use((req, res, next) => {
  res.status(404).json({ message: "Wrong path Sir" });
});

app.use((error, req, res, next) => {
  res
    .status(500 || error.status)
    .send({ message: error.message || "internal issue" });
});
connectDB();
app.listen(8000, () => {
  console.log("The application is running on localhost:8000");
});
