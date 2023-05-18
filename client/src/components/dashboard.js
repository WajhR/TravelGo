import React, { useState } from 'react';
import Header from './Header';
import "../styles/Dashboard.css"

const Dashboard = () => {
  // Variables for Saved Trips
  const [day, setDay] = useState('');
  const [when, setWhen] = useState('');
  const [city, setCity] = useState('');
  const [attractions, setAttractions] = useState([]);

  // Variables for Blogpost
  const [postTitle, setPostTitle] = useState('');
  const [dateCreated, setDateCreated] = useState('');
  const [post, setPost] = useState('');

  // Saved Trip logic
  const handleSaveTrip = () => {
    console.log('Trip saved!');
    console.log('Day:', day);
    console.log('When:', when);
    console.log('City:', city);
    console.log('Attraction List:', attractions);
  };

  // Attraction logic
  const handleAddAttraction = () => {
    const newAttraction = 'New Attraction';
    setAttractions([...attractions, newAttraction]);
  };

  // Save Post logic
  const handleSavePost = () => {
    console.log('Post saved!');
    console.log('Post Title:', postTitle);
    console.log('Date Created:', dateCreated);
    console.log('Post:', post);
  };

  const handlePlanTrip = () => {
    console.log('Plan a trip!');
  };

  const handleWriteBlogPost = () => {
    console.log('Write a blog post!');
  };

  const handleViewBlogPosts = () => {
    console.log('View blog posts');
  };

  return (
    <div className="dashboard-container">
      <Header />

      {/* Saved Trips */}
      <section className="section">
      <h2 className='dashboard-title'>Dashboard</h2>
      <section className='form-section'>
        <form className="form">
        <h3>Saved Trips</h3>
          <div className="form-group">
            <label className="input-title" htmlFor="day">Day:</label>
            <input
              type="text"
              id="day"
              value={day}
              onChange={(e) => setDay(e.target.value)}
              className="input-field"
            />
          </div>


          {/* ... other form fields ... */}

          <div className="form-group">
            <label htmlFor="attractions">Attraction List:</label>
            <ul className="attraction-list">
              {attractions.map((attraction, index) => (
                <li key={index}>{attraction}</li>
              ))}
            </ul>
            <button type="button" onClick={handleAddAttraction} className="add-button">
              Add Attraction
            </button>
          </div>

          <button type="button" onClick={handleSaveTrip} className="save-button">
            Save Trip
          </button>
        </form>
      </section>

      {/* Plan a Trip */}
      <section className="section">
        <h3>Plan a Trip</h3>
        <button type="button" onClick={handlePlanTrip} className="plan-button">
          Plan a Trip
        </button>
      </section>

      {/* Write a Blog Post */}
      <section className="section">
        <h3>Write a Blog Post</h3>
        <form className="form">
          {/* ... form fields ... */}

          <button type="button" onClick={handleSavePost} className="save-button">
            Save Post
          </button>
        </form>
      </section>
      </section>

      {/* View Blog Posts */}
      <section className="section">
        <h3>Blog Posts</h3>
        <button type="button" onClick={handleViewBlogPosts} className="view-button">
          View Blog Posts
        </button>
      </section>

    </div>
  );
};

export default Dashboard;