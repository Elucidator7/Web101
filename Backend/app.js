const express = require("express");
const cors = require("cors");
const app = express();
const { db } = require("./Database/db"); // Import the db function
require("dotenv").config();
const { readdirSync } = require("fs");
const PORT = process.env.PORT;

// middleware
app.use(express.json());
app.use(
  cors({
    //domain or some other configuration
  })
);

/// routes
readdirSync("./routes").map((route) =>
  app.use("/api/v1", require("./routes/" + route))
);
// page direction
app.get("/", (req, res) => {
  res.send("Hello World!");
});
const server = () => {
  db();
  app.listen(PORT, () => {
    console.log("You are listening to port:", PORT);
  });
};

server();
