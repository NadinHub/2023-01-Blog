import React from 'react'
import { Link } from "react-router-dom"
import ava from "../img/ava1.jpeg"
import Edit from "../img/edit.svg"
import Delete from "../img/delete.svg"
import Menu from '../components/Menu';

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img src="https://images.pexels.com/photos/13855925/pexels-photo-13855925.jpeg" alt="" />
        <div className="user">
          <img src={ava} alt="ava1" />
          <div className="info">
            <span>John</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt="editicon" />
            </Link>
            <img src={Delete} alt="delete" />
          </div>
        </div>
        <h1>Lorem ipsum dolor sit amet consectetur </h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.Culpa explicabo quasi voluptates a exercitationem eaque unde ad doloremque tempora aut provident amet, sed facere distinctio eveniet dolorem. Ab, animi molestias!</p>
      </div>
      <Menu />
    </div>
  )
}

export default Single
