import "./placedetails.css";
import { Data, Star } from "./App.js";
import { useContext } from "react";
const PlaceDetails = ({ placeData }) => {
  const { setLocData, locdata } = useContext(Data);
  const { name, photos, icon, id, rating, travel } = placeData;
  const disConverted = (travel.distance.value % 1000) / 100;
  return (
    <div className="topcontainer">
      <div className="container">
        <div className="containerheader">
          <div className="nameandicon">
            <h1>{name}</h1>
            <img src={icon} alt="icon" className="icon" />
          </div>
          <img
            className="closePNG"
            onClick={() =>
              setLocData({
                loading: false,
                data: locdata.data,
                city: locdata.city,
                booli: false,
                singledata: placeData,
              })
            }
            src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTExLjc2IDUxMS43NiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTExLjc2IDUxMS43NjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik00MzYuODk2LDc0Ljg2OWMtOTkuODQtOTkuODE5LTI2Mi4yMDgtOTkuODE5LTM2Mi4wNDgsMGMtOTkuNzk3LDk5LjgxOS05OS43OTcsMjYyLjIyOSwwLDM2Mi4wNDgNCgkJCWM0OS45Miw0OS44OTksMTE1LjQ3Nyw3NC44MzcsMTgxLjAzNSw3NC44MzdzMTMxLjA5My0yNC45MzksMTgxLjAxMy03NC44MzdDNTM2LjcxNSwzMzcuMDk5LDUzNi43MTUsMTc0LjY4OCw0MzYuODk2LDc0Ljg2OXoNCgkJCSBNMzYxLjQ2MSwzMzEuMzE3YzguMzQxLDguMzQxLDguMzQxLDIxLjgyNCwwLDMwLjE2NWMtNC4xNiw0LjE2LTkuNjIxLDYuMjUxLTE1LjA4Myw2LjI1MWMtNS40NjEsMC0xMC45MjMtMi4wOTEtMTUuMDgzLTYuMjUxDQoJCQlsLTc1LjQxMy03NS40MzVsLTc1LjM5Miw3NS40MTNjLTQuMTgxLDQuMTYtOS42NDMsNi4yNTEtMTUuMDgzLDYuMjUxYy01LjQ2MSwwLTEwLjkyMy0yLjA5MS0xNS4wODMtNi4yNTENCgkJCWMtOC4zNDEtOC4zNDEtOC4zNDEtMjEuODQ1LDAtMzAuMTY1bDc1LjM5Mi03NS40MTNsLTc1LjQxMy03NS40MTNjLTguMzQxLTguMzQxLTguMzQxLTIxLjg0NSwwLTMwLjE2NQ0KCQkJYzguMzItOC4zNDEsMjEuODI0LTguMzQxLDMwLjE2NSwwbDc1LjQxMyw3NS40MTNsNzUuNDEzLTc1LjQxM2M4LjM0MS04LjM0MSwyMS44MjQtOC4zNDEsMzAuMTY1LDANCgkJCWM4LjM0MSw4LjMyLDguMzQxLDIxLjgyNCwwLDMwLjE2NWwtNzUuNDEzLDc1LjQxM0wzNjEuNDYxLDMzMS4zMTd6Ii8+DQoJPC9nPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo="
            alt="close"
          />
        </div>
        <div className="details">
          <div className="placedistance">
            <h3>Distance: </h3>
            <p>{disConverted} km</p>
            <img
              className="walkingPNG"
              src="https://img.icons8.com/metro/26/000000/walking.png"
              alt=""
            />
          </div>
          <div className="placerating">
            <h3>Rating:</h3>
            <p>{rating}</p>
            <Star rating={rating} />
          </div>
        </div>
        <div className="photos">
          {photos ? (
            photos.map((photo) => {
              const url = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photo.photo_reference}&key=AIzaSyBsG944IohJ5dSvR8FgjcQJbh_hqAF8nY8`;
              const width = photo.width * (200 / photo.height);
              return (
                <img
                  className="userimage"
                  style={{ height: 200, width: width }}
                  src={url}
                  alt="img"
                  key={id}
                />
              );
            })
          ) : (
            <h2>Photos not available</h2>
          )}
        </div>
      </div>
    </div>
  );
};
export default PlaceDetails;
