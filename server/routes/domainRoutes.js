import express from "express";
const router = express.Router();
import { checkDomain } from "../controllers/domainController";

// Define the route for checking domain information (including DNS records, expiration date, and owner info)
router.get("/:domain", checkDomain);

export default router;
