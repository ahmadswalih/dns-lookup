import express from "express";
const app = express();
const port = 3000;

app.use(express.json());

// Import route handlers
import { domainRoutes } from "./routes/index.js"; // This import should point to domainRoutes

// Use domainRoutes for handling domain-related routes
app.use("/api/domains", domainRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
