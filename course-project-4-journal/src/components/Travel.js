import React from "react"
import Location from "../images/location.png"

export default function Travel(props){
    return (
        <div className="travel--div">
            <img className="travel--img" src={props.imageUrl}/>
            <div className="travel--content">
                <div>
                    <img id="location--image"src={Location}/>
                    <span className="travel--destination">{props.location}</span>
                    <a className="travel--maps" href={props.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h3 className="travel--title">{props.title}</h3>
                <span className="travel--dates">{props.startDate} - {props.endDate}</span>
                <p className="travel--description">{props.description}</p>
            </div>
        </div>
    )
}