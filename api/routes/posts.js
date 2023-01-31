import express from "express";
import { getPosts, getPost, addPost, updatePost, deletePost } from '../controllers/post.js';

const router = express.Router();

//Crate your endpoints/route handlers
router.get("/", getPosts);
router.get("/:id", getPost);
router.post("/", addPost);
router.delete("/:id", deletePost);
router.put("/:id", updatePost);

export default router