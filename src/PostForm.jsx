import React, { useState } from "react";

function PostForm({ addPost }) {
  const [message, setMessage] = useState("")
  const [image, setImage] = useState(null)
  const maxChars = 200
  const handlePostSubmit = (e) => {
    e.preventDefault()
    if (message.trim() || image) {
      addPost(message, image)
      setMessage("")
      setImage(null) 
    }
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      setImage(URL.createObjectURL(file))
    }
  }

  const handleMessageChange = (e) => {
    const input = e.target.value
    if (input.length <= maxChars) {
      setMessage(input)
    }
  }



  return (
    <form onSubmit={handlePostSubmit} className="post-form space-y-4 px-4 sm:px-12 pt-4">
      <textarea
        value={message}
        onChange={handleMessageChange}
        maxLength={maxChars}
        placeholder="What's on your mind?"
        rows="3"
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <p className="text-right text-sm text-gray-500">
        {message.length}/{maxChars}
      </p>
      {image && (
        <div className="mt-2 flex justify-center items-center space-x-2">
          <img
            src={image}
            alt="Preview"
            className="w-[50%] h-auto rounded-md"
          />
        </div>
      )}
      <div className="flex justify-between">
        <input
          type="file"
          onChange={handleImageChange}
          accept="image/*"
          className="w-[75%] border border-gray-300 rounded-md p-2"
        />
        <button
          type="submit"
          disabled={!message.trim() && !image}
          className="w-[22%] py-2 bg-blue-500 text-white p-2 font-semibold rounded-md disabled:bg-gray-400"
        >
          Post
        </button>
      </div>
    </form>
  )
}

export default PostForm;
