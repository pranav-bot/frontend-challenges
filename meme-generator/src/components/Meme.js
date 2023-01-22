import React from "react";
import memeData from "./Data";

export default function Meme(){
    let url;
    async function getMemeImage(){
        const memeArray = memeData.data.memes;
        console.log(memeData)
    }
    return(
        <main>
            <div className="form">
                <input type="text" name="" value="" placeholder="Top Text" />
                <input type="text" name="" value="" placeholder="Bottom Text" />
                <button type="" onClick={getMemeImage}>Get a new meme image</button>
            </div>
        </main>
    )
}