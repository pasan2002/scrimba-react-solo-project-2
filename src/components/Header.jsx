import React from "react"
import EarthImage from "../assets/EarthImage.svg"

export default function Header(){
    return(
        <header>
            <img src={EarthImage} alt="Image of earth" />
            <h1>my travel journal.</h1>
        </header>
    )
}