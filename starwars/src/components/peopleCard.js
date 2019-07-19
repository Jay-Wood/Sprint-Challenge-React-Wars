import React from "react";






const PersonCard = function(props) {
    return(
        <div>
           <h2> {props.name} </h2>
           <p> D.O.B.: {props.birth_year} </p>
           <p> Gender: {props.gender} </p>
           <p> Homeworld: {props.homeworld} </p> 
        </div>

    )
}


export default PersonCard;

