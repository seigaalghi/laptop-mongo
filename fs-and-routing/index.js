const express = require("express");
const router = require('./routes') // mengimport apa yang diexport dari file tersebut
const app = express();
const port = 5000;

app.use(express.json());

app.use("/api/v1",router)

app.listen(port, () => {
  console.log(`Server started on port`, port);
});


// router (modem)
// extender