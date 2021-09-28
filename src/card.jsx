import React from "react";
import './card.css';

function card(props) {
    return <>
        <div className="card">

            <div className="image">
                <img src={props.imgsrc} alt="imagessss" />
            </div>
            <h3>{props.title}</h3>
            <div className="button">
                <a href={props.link} target="_blank"> <button className="btn">Watch Now</button></a>
            </div>
        </div>

    </>

}

export default card;