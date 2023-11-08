import express from "express";
import domainRoutes from "./routes/routes.js";
const app = express();
const port = 3000;

app.use(express.json());
app.use("/api", domainRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
