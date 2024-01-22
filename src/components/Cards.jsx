import React from "react"
import LocationImg from "../assets/LocationImg.svg"

export default function Cards(props){
    return(
        <div className="card">
            <img src={props.imageURL} alt={props.title} className="mainimg"/>
            <div className="card--info">
            <div className="locationinfo">
                <span>
                    <img src={LocationImg} alt="location" />
                    <p>{props.location}</p>
                    <a href={props.googleMaps}>View on Google Maps</a>
                </span>
            </div>
            <h3>{props.title}</h3>
            <h4>{props.startDate} - {props.endDate}</h4>
            <p className="dcpt">{props.description}</p>
            </div>
        <hr/>    
        </div>
    )
}