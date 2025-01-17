import React from "react";
import citiesData from "./CitiesData";

function TouristInfoCards() {
  return (
    <div className="cities-cards mt-5">
      {citiesData.map((item, index) => (
        <div className="card" key={index}>
          <h5>{item.city}</h5>
          <img src={item.image} className="card-img-top" alt="" />
          <div className="card-body">
            <a href={item.website} className="btn btn-primary">
              {item.city}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TouristInfoCards;
