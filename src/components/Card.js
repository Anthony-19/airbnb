import React from "react";
import Star from "../images/Star 1.png";
export default function Card(props) {
  console.log(props.items)
   let badgeText;
   if (props.openSpots === 0) {
    badgeText = 'SOLD OUT'
   }
   else if(props.location === "Online") {
    badgeText = "ONLINE"
   }
  //  else(badgeText.style.display = 'none')
  return (
    <div className="cards">
      {/* {props.openspot === 0 && <div className="card--badge">
        {badgeText}
      </div>} */}
      {badgeText && <div className="card--badge">
        {badgeText}
      </div>}
      <img src={props.coverImg} className="card--image" />
      {/* <button className="button">SOLD OUT</button> */}
      <h3>
        {props.stats.rating}<span className="grey">({props.stats.reviewCount}) • {props.country}</span>
      </h3>
      <h4 className="card--title">{props.title}</h4>
      <h4>
        <b>{props.price}</b> /person {props.person}
      </h4>
    </div>
  );
}
