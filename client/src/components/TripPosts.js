import React from "react";
import Trip from "./Trip";

const TripPosts = ({ trips }) => {
  return (
    <div>
      {trips.map((trip, index) => (
        <Trip key={index} title={trip} />
      ))}
    </div>
  );
};

export default TripPosts;
