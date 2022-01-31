import React from "react";
import star from "../images/star.png"

export default function Card(props){
    return (
        <div className="card">
             <img src={`../images/${props.img}`} />
            <div className="card--stats">
                <img src={star} className="card--star" />
                <span>{props.rating}</span>
                <span>({props.reviewCount}) • </span>
                <span>{props.location}</span>
            </div>
            <p>{props.title}</p>
            <p><span>From ${props.price}</span> / person</p>

        </div>
    )
}