import React from "react";
import styled from "styled-components";


const CardWrapper = styled.div`
    border: 1px solid black;
    border-radius: 5px;
    width: 45%;
    margin: 1vw;
    // height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around; 

`;


const PersonCard = function(props) {
    return(
        <CardWrapper>
           <h2> {props.name} </h2>
           <p> D.O.B.: {props.born} </p>
           <p> Gender: {props.gender} </p>
           {/* <p> Homeworld: {props.homeworld} </p>  */}
        </CardWrapper>

    )
}


export default PersonCard;

