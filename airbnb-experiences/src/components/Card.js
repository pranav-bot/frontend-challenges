import React from "react";
import Star from "../images/star.png"
import CardImage1 from "../images/image1.png"

export default function Card(props){
    return(
        <div className="card">
            <img src={props.img} alt="" className="card-img"/>
            <div className="card-stats">
                <img src={Star} className="card-star" />
                <span>{props.rating}</span>
                <span className="gray">{props.reviewCount}~</span>
                <span className="gray">{props.country}</span>
                </div>
                <p>{props.title}</p>
                <p><span className="price">From {props.price}</span>/person</p>    
            </div>
    )
}