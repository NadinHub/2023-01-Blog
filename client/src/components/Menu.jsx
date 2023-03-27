import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';

const Menu = ({cat}) => {
  const [posts, setPosts] = useState([]);

  // console.log(location) //{... pathname: "/", search: "?cat=science"...}
  useEffect(() => {
    const fetchData = async () => {
      try { const res = await axios.get(`http://localhost:8801/api/posts/?cat=${cat}`); setPosts(res.data) }
      catch (err) { console.log(err) }
    }
    fetchData();
  }, [cat])

  return (
    <div className='menu'>
      <h1>Other posts you may like</h1>
      {posts.map(post => (
        <div className="post" key={post.id}>
            <img src={`../upload/${post?.img}`} alt="" />
            <h2>{post.title}</h2>
            <button>Read more</button>
        </div>
      ))}
    </div>
  )
}

export default Menu
