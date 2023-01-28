import * as React from "react";
// import * as ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider, Outlet, } from "react-router-dom";
import Register from './pages/Register';
import Login from './pages/Login';
import Write from './pages/Write';
import Home from './pages/Home';
import Single from './pages/Single';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./style.scss";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet /> 
      <Footer />
    </>
  )
}
 //Otlet - is the place I want to place other content
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/post/:id", //http://localhost:3000/post/12 we see Navbar, Single, Footer
        element: <Single />
      },
      {
        path: "/write",
        element: <Write />
      },
    ]
  },
  {
    path: "/register",
    element: <Register />
  },
  {
    path: "/login",
    element: <Login />,
  },

])

function App() {
  return (
    <div className="app">
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}


export default App;
