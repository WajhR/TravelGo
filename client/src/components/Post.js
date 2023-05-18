import React from "react";

function Posts() {
  const posts = ["Post 1", "Post 2", "Post 3"];

  return (
    <div>
      {posts.map((post, index) => (
        <div className="post" key={index}>
          <hr></hr>
          <h3>{post}</h3>
          <p>This is a placeholder for the content of {post}.</p>
        </div>
      ))}
    </div>
  );
}

export default Posts;
