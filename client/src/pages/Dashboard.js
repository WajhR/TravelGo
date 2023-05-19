import React, { useState } from 'react';
import Header from '../components/Header';
import "../styles/Dashboard.css"
import DashboardBack from "../assets/Travelgo1.jpg"

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

  return (
    <div className="dashboard-container">
      <Header />

      {/* Saved Trips */}
      <section className="dashboard-section">
      </section>
        <section className='form-section'>
      <img className="dashboard-background" src ={DashboardBack} />
          <form className="form">
            <fieldset className='plan-a-trip-field'>
              <legend className='plan-trip-legend'>Plan A Trip</legend>

            <h3 className='trip-input-title'>Enter Trip Details</h3>
              <div className="form-group">
                <input
                  type="text"
                  id="day"
                  value={day}
                  onChange={(e) => setDay(e.target.value)}
                  className="trip-input-field"
                  />
              </div>


            {/* Plan a Trip */}
            <section className="section">
              <button type="button" onClick={handlePlanTrip} className="plan-button">
                Save Trip
              </button>
            </section>

            </fieldset>
          </form>
       </section>
       <section>
      </section>



    </div>
  );
};

export default Dashboard;