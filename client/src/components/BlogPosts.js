import React from "react";
import Post from "./Post";

const BlogPosts = ({ posts }) => {
  return (
    <div>
      {posts.map((post, index) => (
        <Post key={index} title={post} />
      ))}{" "}
    </div>
  );
};

export default BlogPosts;
