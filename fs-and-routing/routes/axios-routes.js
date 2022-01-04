const express = require("express");
const router = express.Router();
const axios = require("axios");
const { hello, sayHi } = require("../hello");

router.get("/fetching/api", (req, res) => {
  hello();
  sayHi();
  return axios
    .get("https://61414a95357db50017b3da67.mockapi.io/api/v1/users")
    .then((data) => res.send(data.data))
    .catch((err) => console.log(err.message));
});

module.exports = router;
