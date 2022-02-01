import React from "react";
import star from "../images/star.png"

export default function Card(props){

    let badgeText
    if (props.openSpots === 0) {
        badgeText = "Sold Out"
    } else if (props.location == "Online"){
        badgeText = "Online"
    }


    return (
        <div className="card">
            
            {badgeText && <div className="badge">{badgeText}</div>}

             <img src={`../images/${props.coverImg}`}  className="card--image"/>
            <div className="card--stats">
                <img src={star} className="card--star" />
                <span> {props.stats.rating}</span>
                <span> ({props.stats.reviewCount})  •  </span>
                <span> {props.location} </span>
            </div>
            <p>{props.title}</p>
            <p><span><b>From ${props.price}</b></span> / person</p>

        </div>
    )
}