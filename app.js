const express = require("express");
const connectDB = require("./db/database");
const eventRouter = require("./apis/events/routes");
const app = express();
app.use(express.json());

app.use("/api/event", eventRouter);

connectDB();
app.listen(8001, () => {
  console.log("The application is running on localhost:8001");
});
