import express from "express";
import { addPost } from '../controllers/post.js';

const router = express.Router();

//Crate your endpoints/route handlers
router.get("/t", addPost)

export default router