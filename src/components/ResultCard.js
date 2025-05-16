import React from "react";
import './ResultCard.css'

const ResultCard = (props) => {
    const country = props.country;
    const services = props.services;
    return(
        <div className="result-card">
            <h2>{country}</h2>
            <hr></hr>
            <ul>
                {services.map((service) => {
                    return <li>{service}</li>
                })}
            </ul>
            

        </div>
    );
};

export default ResultCard;