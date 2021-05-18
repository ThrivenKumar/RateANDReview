import React, { useContext, useState } from "react";
import "./app.css";
import Header from "./Header.js";
import PlaceDetails from "./placedetails.js";
export const Data = React.createContext();
const App = () => {
  const [locdata, setLocData] = useState({
    loading: false,
    data: [],
    city: "Location",
    booli: false,
    singledata: {},
  });
  return (
    <Data.Provider value={{ setLocData, locdata }}>
      <Header />
      {locdata.booli ? (
        <PlaceDetails placeData={locdata.singledata} />
      ) : (
        <AvailablePlaces />
      )}
    </Data.Provider>
  );
};
const Place = ({ placeData }) => {
  const { locdata, setLocData } = useContext(Data);
  const { name, icon, rating, travel } = placeData;
  const disConverted = (travel.distance.value % 1000) / 100;
  return (
    <div
      className="place"
      onClick={() =>
        setLocData({
          loading: false,
          data: locdata.data,
          city: locdata.city,
          booli: true,
          singledata: placeData,
        })
      }
    >
      <div className="placename">
        <h3>{name}</h3>
        <img src={icon} alt="icon" className="placeicon" />
      </div>
      <div className="ratinganddistance">
        <Star rating={rating} />
        <div className="distance">
          <img
            className="walkingPNG"
            src="https://img.icons8.com/metro/26/000000/walking.png"
            alt=""
          />
          <p>{disConverted} km</p>
        </div>
      </div>
    </div>
  );
};
const AvailablePlaces = () => {
  const { locdata } = useContext(Data);
  return (
    <>
      {locdata.loading ? (
        <div className="loading">
          <h1>Loading...</h1>
        </div>
      ) : (
        <div className="placesgrid">
          {locdata.data.map((place) => {
            return <Place placeData={place} key={place.id} />;
          })}
        </div>
      )}
    </>
  );
};
export const Star = ({ rating }) => {
  var i = [];
  for (let count = 0; count < 5; count++) {
    if (rating >= 1) {
      i.push(100);
      rating -= 1;
    } else if (rating < 1 && rating > 0) {
      i.push(100 * rating);
      rating -= 1;
    } else {
      i.push(0);
    }
  }
  return (
    <div className="rating">
      {i.map((percentage, id) => {
        return (
          <div
            className="starsvg"
            style={{
              background: `linear-gradient(to right, gold ${percentage}%, rgb(182, 182, 182) 0%)`,
            }}
            key={id}
          >
            <svg viewBox="0 0 462 461" fill="none">
              <path
                d="M221.446 7.91817C224.35 -1.47861 237.65 -1.47865 240.554 7.91812L287.839 160.935C289.134 165.126 293.008 167.983 297.393 167.983H451.437C461.002 167.983 465.109 180.123 457.508 185.93L332.035 281.782C328.704 284.327 327.314 288.677 328.551 292.681L376.271 447.108C379.146 456.41 368.383 463.918 360.647 458.007L237.071 363.604C233.487 360.866 228.513 360.866 224.929 363.604L101.353 458.007C93.6165 463.918 82.854 456.41 85.7286 447.108L133.449 292.681C134.686 288.677 133.296 284.327 129.965 281.782L4.49237 185.93C-3.10877 180.123 0.997624 167.983 10.563 167.983H164.607C168.992 167.983 172.866 165.126 174.161 160.935L221.446 7.91817Z"
                fill="white"
              />
            </svg>
          </div>
        );
      })}
    </div>
  );
};
export default App;
