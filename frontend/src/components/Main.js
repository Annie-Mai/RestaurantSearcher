import React, { useState, useCallback, useEffect } from "react";
import "../styles/Main.css";

import axios from "axios";

import {
  Typography,
  CircularProgress,
} from "@mui/material";


import RestaurantsList from "./RestaurantList";
import { RouteMap } from "./RouteMap";

const Main = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // if user does not allow us to see their location, this error will show
  const [locationError, setLocationError] = useState(false);

  // this shows to the user that we are loading search results
  const [loading, setLoading] = useState(false);

  // this is the user's current location coords
  const [coords, setCoords] = useState({ lat: 0, lng: 0 });

  // this is the place that the user had selected to display on the map
  const [selectedPlace, setSelectedPlace] = useState(null);

  // this is obtained from the yelp api. it is the list of restaurants queried by:
  // 1. it finds the user's current location
  // 2. user inputs a restaurant name. you use yelp api to find all restaurants closest to that name, nearest to user
  const [restaurants, setRestaurants] = useState([]);


  // this useEffect is just getting my current location. user has to enable location sharing in chrome
  // once it gets my current location, it'll set the `coords` state to store current location
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      if (!position) {
        setLocationError(true);
      }
      const { latitude, longitude } = position.coords;
      setCoords({ lat: latitude, lng: longitude });
    });
  }, []);

  // when user clicks the search button, it'll:
  // 1. search yelp api for restaurants with this name
  // 2. reset the input field
  const search = async () => {
    setLoading(true);
    const { data } = await axios.get(
      `http://localhost:8000/api/restaurants/${searchTerm}/${coords.lat}/${coords.lng}`
    );

    setRestaurants(data);
    setLoading(false);
  };


  const findOnMap = useCallback((restaurant) => {
    setSelectedPlace(restaurant);
  }, []);

  return (
    <div className="main-container">
      <div className="searchBar">
      <div className = 'wrapper'>
        {/* searchbar where usser would input their restaurant name */}
          <input
            placeholder="Enter a restaurant"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />
          <button className='submit' onClick={search} disabled={loading}>
            Send
          </button>
        </div>
        {/* gives a location error if user did not allow location access */}
        {locationError ? (
          <Typography>Please enable location sharing</Typography>
        ) : null}

          {/* RouteMap is a custom component for GoogleMaps Api. Takes in:
            1. `coords` which is the coords of where the user is currently at
            2. the place that user selected in `RestaurantsList` */}
        <div className="GoogleMap">
          {coords.lat !== 0 && coords.lng !== 0 ? (
            <RouteMap coords={coords} selectedPlace={selectedPlace} />
          ) : (
            <CircularProgress />
          )}
        </div>
      </div>
        <div className="rest-list">
          {loading ? <CircularProgress /> : null}
          {restaurants?.businesses && restaurants.businesses.length !== 0 ? (
            <RestaurantsList restaurants={restaurants} findOnMap={findOnMap} />
          ) : null}
        </div>
    </div>
  );
};

export default Main;
