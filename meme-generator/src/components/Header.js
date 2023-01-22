import React from 'react'
import TrollFace from "../images/TrollFace.png"

export default function Header(){
    return(
        <header>
            <img src={TrollFace} />
            <h2>Meme Generator</h2>
        </header>
    )
}