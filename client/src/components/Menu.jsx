import React from 'react'

const Menu = () => {
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

      ]
  return (
    <div className='menu'>
      <h1>Other posts you may like</h1>
      {posts.map(post => (
        <div className="post" key={post.id}>
            <img src={post.img} alt="" />
            <h2>{post.title}</h2>
            <button>Read more</button>
        </div>
      ))}
    </div>
  )
}

export default Menu
