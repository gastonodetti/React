import React from "react"
import Location from "../images/location.png"

export default function Travel(props){
    return (
        <div className="travel--div">
            <img className="travel--img" src="https://lh3.googleusercontent.com/7qGDUPijGP5_WDcfMoD6jnbjzutgQWyXfNV_4VPIbj12RJd78LnLeflJ6Wywm_Pk"/>
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