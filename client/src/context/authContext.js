import { createContext, useState, useEffect } from "react";
import axios from 'axios';


export const AuthContext = createContext();


export const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("user")) || null)

    const login = async (inputs) => {
        const res = await axios.post("http://localhost:8801/api/auth/login", inputs, { withCredentials: true, credentials: 'include' })
        setCurrentUser(res.data);
    };
    const logout = async () => {
        await axios.post("http://localhost:8801/api/auth/logout");
        setCurrentUser(null);
    };

    //we need to update our localstorage
    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(currentUser))
    }, [currentUser]); //it runs only when currentUser changes 

    return (
        <AuthContext.Provider value={{ currentUser, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
} 