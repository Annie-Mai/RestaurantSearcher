import React, { useState } from "react";
import "../styles/RestaurantList.css";
import { BsHeartFill, BsHeart } from "react-icons/bs";

const RestaurantsList = ({ restaurants, findOnMap }) => {

  // const [faved, setFav] = useState(false);
  // let emoji = "";
  //Making sure that the closest starbucks displays first
  let sorted = restaurants.businesses.sort((first, second) => {
    if (first.distance < second.distance) {
      return first - second;
    }
    else {
      return second - first;
    }

  });

  const update = value => {
    console.log(document.querySelector("rest-name").innerHTML);
    console.log(value);
  }

  let [changeText, setChangeText] = useState(true);
  const handleChange = () => {
    return setChangeText(!changeText);
  };


  return (
    <div className="restaurant-card">
      {sorted.map((restaurant) => (
        <div className="card-info"
          key={restaurant.id}
          style={{ cursor: "pointer" }}>
          <div className="card-container">
            <div className="card-wrapper">
              <div className="rest-name">
                <p className="name">{restaurant.name}</p> <p className="rating" marginLeft={"5rem"}>{" ⭐" + restaurant.rating}</p>
              </div>
              <div className="rest-location">
                <p className="card-text">{restaurant.location.address1 + ", " + restaurant.location.city + ", " +
                  restaurant.location.state + ", " + restaurant.location.zip_code}</p>
              </div>
              <div className="rest-phone">
                <p className="card-text">{restaurant.phone}</p>
              </div>
              <div className="rest-dist">
                <p className="card-text">
                  {(restaurant.distance / 1000).toFixed(2)} km away
                </p>
              </div>
              <button className="fav-btn" onClick={() => handleChange()}> {changeText ? <BsHeart /> : <BsHeartFill />} </button>
              <button className="route-btn" onClick={() => findOnMap(restaurant)}>Route</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};


export default RestaurantsList;