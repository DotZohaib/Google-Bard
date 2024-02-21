import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("server is listening on port and listening on other port so we can connect to server ");
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`server at http://localhost:${port}`);
});
