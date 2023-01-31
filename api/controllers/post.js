import { db } from "../db/db.js"

export const getPosts = (req, res) => {
    const q = req.query.cat ? "SELECT * FROM posts WHERE cat=?" : "SELECT * FROM posts";

    db.query(q, [req.query.cat], (err, data) => {
        if (err) return res.status(500).send(err);
        return res.status(200).json(data);
    })
}
export const getPost = (req, res) => {
    console.log(req.params.id)
    const q = "SELECT `username`, `title`, `desc`, p.img, u.img AS userImg, `cat`, `date` FROM users u JOIN posts p ON u.id=p.uid WHERE p.id= ? "
    db.query(q, [req.params.id], (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json(data[0]);
    })
}
export const addPost = (req, res) => {
    res.json("from controller")
}
export const deletePost = (req, res) => {
    const token = req.cookies.access_token
    if(!token) return res.status(401).json('Not authenticated!')
}
export const updatePost = (req, res) => {
    res.json("from controller")
}
