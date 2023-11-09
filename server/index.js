import express from "express";
import domainRoutes from "./routes/routes.js";
const app = express();
const port = 7000;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  next();
});

app.use(express.json());
app.use("/api", domainRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
