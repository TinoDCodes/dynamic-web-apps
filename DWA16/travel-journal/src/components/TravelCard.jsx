import React from "react";

export default function TravelCard(props) {
  const { destination } = props;

  return (
    <div className="card">
      {/*---------- DESTINATION IMAGE ----------*/}
      <img
        src={destination.imageUrl}
        alt={destination.title}
        className="card--image"
      />

      <section className="card--details">
        {/*---------- LOCATION DETAILS ----------*/}
        <div className="card--details-location">
          <img
            src="/location.svg"
            alt="location tag"
            className="card--location_tag"
          />
          <h3 className="card--location_name">
            {destination.location.toUpperCase()}
          </h3>
          <a
            href={destination.googleMapsUrl}
            target="_blank"
            className="card--location_link"
          >
            View on Google Maps
          </a>
        </div>

        <h1 className="card--title">{destination.title}</h1>

        <h4 className="card--details_dates">
          {destination.startDate} - {destination.endDate}
        </h4>

        <p className="card--details_description">{destination.description}</p>
      </section>
    </div>
  );
}
