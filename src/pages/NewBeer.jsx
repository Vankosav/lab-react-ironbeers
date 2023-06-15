import React from 'react'
import Header from '../components/Header';
import { useState } from "react";    
import axios from 'axios'
import { useNavigate } from "react-router-dom";

function NewBeer() {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState ("");
  const [firstBrewed, setFirstBrewed] = useState("");
  const [brewersTips, setBrewersTips] = useState ("");
  const [attenuationLevel , setAttenuationLevel ] = useState(0);
  const [contributedBy, setContributedBy] = useState ("");

  const navigate = useNavigate(); 
 

  const handleSubmit = (e) => {          // <== HANDLER FUNCTION
    // Prevent page reload on submit
    e.preventDefault();
    // Create the body for the POST request
    const body = { name: name, tagline: tagline, description: description, first_brewed: firstBrewed, brewers_tips: brewersTips, attenuation_level: attenuationLevel, contributed_by: contributedBy };

    axios
    .post("https://ih-beers-api2.herokuapp.com/beers/new", body)
    .then((response) => {
      // Reset the state
      setName("");
      setTagline("");
      setDescription("");  
      setFirstBrewed("");
      setBrewersTips("");
      setAttenuationLevel(""); 
      setContributedBy("");
      navigate('/beers');
  });
  };

  return (
    <div className="newBeer"> <Header/>   
      <h3>Add New Beer</h3>
      
      <form onSubmit={handleSubmit}>   {/* <== ADD EVENT  */}
        <label>Name</label>
        <input
          type="text"
          name="name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <br></br>
 
        <label>Tagline</label>
        <input
          type="text"
          name="tagline"
          onChange={(e) => setTagline(e.target.value)}
          value={tagline}
        />
<br></br>
<label>Description</label>
        <textarea
          type="text"
        name="description"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
<br></br>
<label>First Brewed</label>
        <input
          type="text"
          name="first_brewed"
          onChange={(e) => setFirstBrewed(e.target.value)}
          value={firstBrewed}
        />
<br></br>
<label>Brewer's tips</label>
        <input
          type="text"
          name="brewers_tips"
          onChange={(e) => setBrewersTips(e.target.value)}
          value={brewersTips}
        />
<br></br>
<label>Attenuation Level</label>
        <input
          type="number"
          name="attenuation_level"
          onChange={(e) => setAttenuationLevel(e.target.value)}
          value={attenuationLevel}
        />
<br></br>
<label>Contributed by</label>
        <input
          type="text"
          name="contributed_by"
          onChange={(e) => setContributedBy(e.target.value)}
          value={contributedBy}
        />
        <br></br>
        <button type="submit">Add new beer</button>
      </form>
    </div>
  );
}

export default NewBeer;