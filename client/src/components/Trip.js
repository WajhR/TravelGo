import React from "react";

function Trips() {
  const trips = ["Trip 1", "Trip 2", "Trip 3"];

  return (
    <div>
      {trips.map((trip, index) => (
        <div className="trip" key={index}>
          <hr></hr>
          <h3>{trip}</h3>
          <p>This is a placeholder for the description of {trip}.</p>
        </div>
      ))}
    </div>
  );
}

export default Trips;
