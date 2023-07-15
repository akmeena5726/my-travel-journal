import React from "react";

export default function Card(props) {
  return (
    <div className="card">
      <img className="card-img" src={props.item.img} alt="" />
      <div className="card-details">
        <div className="info">
          <img
            className="pin"
            src="https://img.icons8.com/color/48/marker--v1.png"
            alt="marker--v1"
          />
          <p className="country">{props.item.country}</p>
          <a target="_blank" rel="noreferrer" href={props.item.locationLink}>
            View on Google Maps
          </a>
        </div>
        <h1 className="location">{props.item.location}</h1>
        <p className="timeline">{props.item.timeline}</p>
        <p className="about-location">{props.item.description}</p>
      </div>
    </div>
  );
}
