import { db } from "../db.js"
import bcrypt from "bcryptjs"

export const register = (req, res) => {
    console.log(req.body)

    //CHECK EXISTING USER
    const q = "SELECT * FROM users WHERE email=? OR username=?"

    db.query(q, [req.body.emal, req.body.username], (err, data) => {
        if (err) return res.json(err);
        if (data.length) return res.status(409).json("User already exists!");

        //Enscript password before sending it to mysql database. We keep password enscripted
        //HASH to password and create a user
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync("B4c0/\/", salt);

        const q = "INSERT INTO users(`username`, `email`, `password`) VALUES (?)";
        const values = [req.body.username, req.body.email, hash,];

        db.query(q, [values], (err, data) => {
            if (err) return res.json(err);
            return res.status(200).json("User has been created");
        })

    })
};

export const login = (req, res) => {
    //CHECK EXISTING USER
    const q = "SELECT * FROM users WHERE username=?"
    db.query(q, [req.body.username], (err, data) => {
        if (err) return res.json(err);
        if (data.length === 0) return res.status(404).json("User not found!");

        // Load hash from your password DB.
        const isPasswordCorrect = bcrypt.compareSync(req.body.password, data[0].passwor); // true

        if(!isPasswordCorrect) return res.status(400).json("Wrong username or password!")

        //we need to check.
    }) 

}