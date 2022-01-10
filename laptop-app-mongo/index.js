const express = require("express");
const app = express();
const port = 5000;
const connect = require("./config");

const Brand = require("./models/brand");

connect();

app.use(express.json());

app.post("/brand", async (req, res) => {
  const { body } = req;
  try {
    const brand = await Brand.create(body);
    res.status(201).json(brand);
  } catch (error) {
    res.status(500).json({
      ini: "error",
      error: error.message,
    });
  }
});

app.listen(port, () => console.log("Server is running on port", port));
