import React, { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
// import axios from 'axios'
import { AuthContext } from '../context/authContext.js';

const Login = () => {

  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  })
  const [err, setError] = useState(null)
  const navigate = useNavigate();

  const { login } = useContext(AuthContext);

  const handleChange = e => { setInputs(prev => ({ ...prev, [e.target.name]: e.target.value })) }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      await login(inputs)
      // await axios.post("http://localhost:8801/api/auth/login", inputs) // my API URL //in pachage.json we write "proxy": "http://localhost:8801/api/"
      navigate("/")
    }
    catch (err) { console.log(err.response); setError(err.response.data) }
  }

  return (
    <div className='auth'>
      <h1>Login</h1>
      <form action="">
        <input required type="text" placeholder="Username" name="username" onChange={handleChange} />
        <input required type="password" placeholder="password" name="password" onChange={handleChange} />
        <button onClick={handleSubmit}>Login</button>
        {err && <p> {err}</p>}
        <span>Don't you have an account?<Link to="/register">Register</Link></span>
      </form>
    </div>
  )
}

export default Login
