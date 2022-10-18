import React from "react";
import GridPhoto from "../images/grid-photo.png"

export default function Hero(){
    return(
        <section>
            <img src={GridPhoto} alt="" />
            <h1>Online Experiences</h1>
            <p>Join unique interactive identities led by
                one-of-a-kind hosts-all without leaving home 
            </p>
        </section>
    )
}