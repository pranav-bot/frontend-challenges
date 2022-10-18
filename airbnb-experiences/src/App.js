import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import data from "./Data";
import Card from "./components/Card";


export default function App(){
    const cards = data.map((item) =>{
        return(
        <Card 
        img={item.coverImg}
        rating={item.stats.rating}
        reviewCount = {item.stats.reviewCount}
        location = {item.Location}
        title = {item.title}
        price = {item.price}
        country = {item.country}
        />
    )})
    return(
        <div>
            <Navbar />
            <Hero />
            <section className="cards-list">
                {cards}
            </section>
        </div>
    )
}