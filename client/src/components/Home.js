import React from "react";
import BlogPosts from "./BlogPosts";
import TripPosts from "./TripPosts";
import Header from "./Header";
import "../styles/Home.css";

const Home = () => {
  const posts = ["Post 1", "Post 2", "Post 3"]; //placeholder posts
  const trips = ["Trip 1", "Trip 2", "Trip 3"]; //placeholder trips

  return (
    <div>
      <Header />
      <div className="home-container">
        <div className="column">
          <h2>Blog Posts</h2>
          <div className="post-column">
            <BlogPosts posts={posts} />
          </div>
        </div>
        <div className="column">
          <h2>Trip Posts</h2>
          <div className="post-column">
            <TripPosts trips={trips} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
