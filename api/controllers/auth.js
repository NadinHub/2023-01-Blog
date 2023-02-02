import { db } from "../db/db.js"
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"

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
        const hash = bcrypt.hashSync(req.body.password, salt);

        const q = "INSERT INTO users(`username`, `email`, `password`) VALUES (?)";
        const values = [req.body.username, req.body.email, hash];

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
        // console.log(data[0].password);
        // console.log(req.body.password);
        // Load hash from your password DB.
        const isPasswordCorrect = bcrypt.compareSync(req.body.password, data[0].password, function (err, result) {
            if (err) { throw (err); }
            // console.log(result);
        }); // true or false //data[0].password - from DB

        // console.log("is PasswordCorrect", isPasswordCorrect);
        if (!isPasswordCorrect) return res.status(400).json("Wrong username or password!")

        //Create our token using JWT
        const token = jwt.sign({ id: data[0].id }, "jwtkey");
        const { password, ...other } = data[0];
        console.log("other", other) 
        //Let's return our user information and send this token as a cookie. To use cookie we need library npm add cookie-parser.
        res.cookie("access_token", token, { httpOnly: false }).status(200).json(other); //we send OTHER (not password)
        //"httpOnly:true" - can allowed to send ONLY when we make an HTTP request.
    });
}; 

export const logout = (req, res) => {
    res.clearCookie("access_token", {
        sameSite: "none",
        secure: true
    }).status(200).json("User has been logged out.")
}
