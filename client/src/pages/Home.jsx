import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import axios from 'axios'
import { useEffect } from 'react';

// const posts = [
//   {
//     id: 1,
//     title: "Lorem ipsum",
//     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
//     img: "https://images.pexels.com/photos/14757560/pexels-photo-14757560.jpeg",
//   },
//   {
//     id: 2,
//     title: "Lorem ipsum",
//     desc: "Lorem ipsum",
//     img: "https://images.pexels.com/photos/14757560/pexels-photo-14757560.jpeg",
//   },
//   {
//     id: 3,
//     title: "Lorem ipsum",
//     desc: "Lorem ipsum",
//     img: "https://images.pexels.com/photos/14757560/pexels-photo-14757560.jpeg",
//   },
//   {
//     id: 4,
//     title: "Lorem ipsum",
//     desc: "Lorem ipsum",
//     img: "https://images.pexels.com/photos/14757560/pexels-photo-14757560.jpeg",
//   },
//   {
//     id: 5,
//     title: "Lorem ipsum",
//     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
//     img: "https://images.pexels.com/photos/14757560/pexels-photo-14757560.jpeg",
//   },
// ]

const Home = () => {

  const [posts, setPosts] = useState([]);

  const cat = useLocation().search

  // console.log(location) //{... pathname: "/", search: "?cat=science"...}
  useEffect(() => {
    const fetchData = async () => {
      try { const res = await axios.get(`http://localhost:8801/api/posts${cat}`); setPosts(res.data) }
      catch (err) { console.log(err) }
    }
    fetchData();
  }, [cat])


  const getText = (html) =>{
    const doc = new DOMParser().parseFromString(html, "text/html")
    return doc.body.textContent
  }
  
  return (
    <div className='home'>
      <div className="posts">
        {posts.map(post => (
          <div className="post" key={post.id}>
            <div className="img">
              <img src={`../upload/${post.img}`} alt="imagepost" />
            </div>
            <div className="content">
              <Link className="link" to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
              </Link>
              <p>{getText(post.desc)}</p>
              <button>Read more</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
