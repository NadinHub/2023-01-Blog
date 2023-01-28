import React from 'react'
import { Link } from 'react-router-dom'

const posts = [
  {
    id: 1,
    title: "Lorem ipsum",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
    img: "https://images.pexels.com/photos/14757560/pexels-photo-14757560.jpeg",
  },
  {
    id: 2,
    title: "Lorem ipsum",
    desc: "Lorem ipsum",
    img: "https://images.pexels.com/photos/14757560/pexels-photo-14757560.jpeg",
  },
  {
    id: 3,
    title: "Lorem ipsum",
    desc: "Lorem ipsum",
    img: "https://images.pexels.com/photos/14757560/pexels-photo-14757560.jpeg",
  },
  {
    id: 4,
    title: "Lorem ipsum",
    desc: "Lorem ipsum",
    img: "https://images.pexels.com/photos/14757560/pexels-photo-14757560.jpeg",
  },
  {
    id: 5,
    title: "Lorem ipsum",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
    img: "https://images.pexels.com/photos/14757560/pexels-photo-14757560.jpeg",
  },
]

const Home = () => {
  return (
    <div className='home'>
      <div className="posts">
        {posts.map(post => (
          <div className="post" key={post.id}>
            <div className="img">
              <img src={post.img} alt="imgagepost" />
            </div>
            <div className="content">
              <Link className="link" to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
              </Link>
              <p>{post.desc}</p>
              <button>Read more</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
