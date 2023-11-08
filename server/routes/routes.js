import express from "express";
const router = express.Router();
import { checkDomain } from "../controllers/DomainController.js";

// Define the route for checking domain information (including DNS records, expiration date, and owner info)
router.get("/domain/:domain", checkDomain);

export default router;
