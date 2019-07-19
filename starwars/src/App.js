import React, { useEffect, useState } from "react";
import axios from "axios";
import './App.css';
import PersonCard from "./components/peopleCard.js";

const App = () => {
  /* Try to think through what state you'll need for this app before starting. Then build out the state properties here. Fetch characters from the star wars api in an effect hook. Remember, anytime you have a side effect in a component, you want to think about which state and/or props it should
  sync up with, if any.*/

  const [dataObj, setDataObj] = useState([])

  useEffect( () => {
    axios.get("https://swapi.co/api/people/") 
    .then(res => {
      console.log("SW data:", res.data.results)
      setDataObj(res.data.results)
      // console.log("newdata",dataObj)
    })

  }, []);

  return (
    
    <div className="App"> 
      <h1 className="Header">React Wars</h1>

      {dataObj.map(char => ( <PersonCard 
        name = {char.name}
        born = {char.birth_year}
        key = {char.name}
        gender = {char.gender}
        homeworld = {char.homeworld}
      />
      ))} 
    </div>
  );

}

export default App;
