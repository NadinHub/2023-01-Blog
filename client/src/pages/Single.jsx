import { Link, useNavigate, useLocation } from "react-router-dom"
import ava from "../img/ava1.jpeg"
import Edit from "../img/edit.svg"
import Delete from "../img/delete.svg"
import Menu from '../components/Menu';
import { useState, useContext } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';
import { AuthContext } from '../context/authContext.js';

const Single = () => {

  const [post, setPosts] = useState([]);

  const location = useLocation()

  // console.log(location) //{... pathname: "/", search: "?cat=science"...}
  const postId = location.pathname.split("/")[2] //http://localhost:3001/post/1 - we take post number from URL address in browser

  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:8801/api/posts/${postId}`);
        setPosts(res.data)
      }
      catch (err) { console.log(err) }
    }
    fetchData();
  }, [postId])

  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${postId}`);
      navigate("/")
    } catch (err) { console.log(err) }
  }
  return (
    <div className="single">
      <div className="content">
        <img src={post?.img} alt="" />
        <div className="user">
          {post.userImg && <img src={post.userImg} alt="avatar" />}
          <div className="info">
            <span>{post.username}</span>
            <p>Posted {moment(post.date).fromNow()}</p>
          </div>
          {(currentUser.username === post.username) && (
            <div className="edit">
              <Link to={`/write?edit=2`}>
                <img src={Edit} alt="editicon" />
              </Link>
              <img onClick={handleDelete} src={Delete} alt="delete" />
            </div>
          )}
        </div>
        <h1>{post.title}</h1>
        {post.desc}
      </div>
      <Menu />
    </div>
  )
}

export default Single
