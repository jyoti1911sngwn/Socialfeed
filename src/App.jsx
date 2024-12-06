import React, { useState } from 'react';
import PostForm from './PostForm';
import Post from './Post';
import './App.css';

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      message: 'First post! Love this app.',
      likes: 10,
      image:
        'https://img-cdn.pixlr.com/image-generator/history/65772796905f29530816ea40/4ca9ba3d-c418-4153-a36a-77f4182236a7/medium.webp',
    },
    {
      id: 2,
      message: 'Second post! this is my second!',
      likes: 3,
      image:
        'https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp',
    },
    {
      id: 3,
      message: 'Third post! this is my first',
      likes: 5,
      image:
        'https://img-cdn.pixlr.com/image-generator/history/65661ff66061274d12af3e59/1b1b22a1-56ad-4002-9705-b95bf8c5bc4e/medium.webp',
    },
  ])

  const [darkMode, setDarkMode] = useState(false)

  const addPost = (message, image) => {
    const newPost = {
      id: Date.now(),
      message,
      likes: 0,
      image,
    }
    setPosts([newPost, ...posts])
  }

  const deletePost = (id) => {
    setPosts(posts.filter((post) => post.id !== id))
  }

  const likePost = (id) => {
    setPosts(
      posts.map((post) =>
        post.id === id ? { ...post, likes: post.likes + 1 } : post
      )
    )
  }

  const toggleBackground = () => {
    setDarkMode((prevMode) => !prevMode)
  }

  return (
    <div
      className={`App w-full h-full mx-auto pb-12 px-2 sm:px-12 shadow-md transition-all duration-500 ${
        darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'
      }`}
    >
      <nav className="flex justify-between items-center p-4 ">
        <h1 className="text-2xl sm:text-3xl font-bold">Social Feed</h1>
        <div className='flex flex-row' >
          <div className='mx-4 text-md sm:text-xl font-semibold'>
            Toggle Mode
          </div>

      
        <div
          onClick={toggleBackground}
          className={`w-12 h-6 flex items-center rounded-full cursor-pointer transition-all ${
            darkMode ? 'bg-blue-500' : 'bg-gray-300'
          }`}
        >
          <div
            className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform ${
              darkMode ? 'translate-x-6' : 'translate-x-0'
            }`}
          ></div>
        </div>  </div>
      </nav>

      <PostForm addPost={addPost} />

      <div className="feed mt-6 grid grid-cols-1 lg:grid-cols-3 gap-4 p-4 sm:p-8">
        {posts.map((post) => (
          <Post
            key={post.id}
            post={post}
            deletePost={deletePost}
            likePost={likePost}
          />
        ))}
      </div>
    </div>
  )
}

export default App
