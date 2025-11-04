import express from "express";
import path from "path";

const app = express();

app.use("/build", express.static(path.join(__dirname, "..", "build")));

app.use(express.static(path.join(__dirname)));

app.get("/", (_req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

export default app;
