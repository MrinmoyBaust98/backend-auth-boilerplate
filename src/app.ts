import express from "express";
const app = express();
const port = 3000;

//For testing
app.get("/", (req, res) => {
  res.send("Hello World!");
});

export default app;
