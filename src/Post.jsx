import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";

function Post({ post, deletePost, likePost }) {
  const [isDeleting, setIsDeleting] = useState(false)

  const handleDelete = () => {
    setIsDeleting(true)
    setTimeout(() => deletePost(post.id), 500)
  }

  return (
    <div className="px-0 sm:px-4">
    <div
      className={`post p-4 border-b border-gray-200 bg-white rounded-md shadow-md transition-all duration-500 ${
        isDeleting ? "opacity-0 scale-75" : "opacity-100 scale-100"
      }`}
    >
      {post.image && (
        <img
          src={post.image}
          alt="Post"
          className="w-full h-48 object-cover rounded-md mb-4"
        />
      )}

      <p className="text-lg mb-2">{post.message}</p>
      <div className="flex justify-between items-center">
        <button
          onClick={() => likePost(post.id)}
          className="flex items-center text-red-500 hover:text-red-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 mr-2"
            viewBox="0 0 24 24"
            fill={post.likes > 0 ? "red" : "none"}
            stroke={post.likes > 0 ? "red" : "currentColor"}
            strokeWidth="2"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
          {post.likes > 0 ? post.likes : "Like"}
        </button>

        <FaTrash
          size={20}
          className="text-red-500 cursor-pointer hover:text-red-700"
          onClick={handleDelete}
          title="Delete Post"
        />
      </div>
    </div>
    </div>
  )
}

export default Post;
