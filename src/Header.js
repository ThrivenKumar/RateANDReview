import { useContext, useRef } from "react";
import { Data } from "./App.js";
import "./Header.css";
import icon from "./icons8.png";
const coords = () => {
  return new Promise((res, rej) => {
    navigator.geolocation.getCurrentPosition(res);
  });
};
function Header() {
  const { locdata, setLocData } = useContext(Data);
  const ref = useRef(null);
  const getData = async (e) => {
    e.preventDefault();
    if (ref.current.value) {
      setLocData({
        loading: true,
        data: [],
        city: "Location",
        booli: false,
        singledata: {},
      });
      const coordinates = await coords();
      const lat = coordinates.coords.latitude;
      const lon = coordinates.coords.longitude;
      console.log(coordinates);
      // const url = `https://us-central1-ratenreview-fc981.cloudfunctions.net/app/${lat}/${lon}/${ref.current.value}`;
      const url = `http://localhost:5000/${lat}/${lon}/${ref.current.value}`;
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setLocData({
            loading: false,
            data: data.places,
            city: data.city,
            booli: false,
            singledata: {},
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    <div className="header">
      <div className="loginheader">
        <button className="login">Login</button>
        <button className="login">Sign Up</button>
      </div>
      <div className="bodyheader">
        <div className="title">
          <h3>Rate 'n' Review</h3>
        </div>
        <div className="search">
          <form name="search" onSubmit={getData}>
            <img className="locationPNG" src={icon} alt="L" />
            <div className="location">
              <button type="button">{locdata.city}</button>
            </div>
            <div className="verticalLine"></div>
            <img
              className="searchPNG"
              src="https://img.icons8.com/metro/104/000000/search.png"
              alt="search"
            />
            <input type="search" ref={ref} placeholder="Search" />
          </form>
        </div>
        <div className="descriptionheader">
          <h3>Find top rated services near you</h3>
        </div>
      </div>
    </div>
  );
}

export default Header;
