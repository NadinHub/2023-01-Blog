import express from "express";
import { register } from "../controllers/auth.js"

const router = express.Router();

//Crate your endpoints/route handlers
router.post("/register", register)

export default router