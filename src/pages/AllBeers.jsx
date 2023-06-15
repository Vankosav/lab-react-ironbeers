import React from 'react'
import { useState, useEffect } from "react";     // <== IMPORT useEffect
import axios from "axios"; 
import Header from '../components/Header';
import { Link } from 'react-router-dom';

function AllBeers() {
    const [beers, setBeers] = useState([]);

    useEffect(() => {                                // <== ADD THE EFFECT
        axios
          .get("https://ih-beers-api2.herokuapp.com/beers")
          .then((response) => {
            console.log('response.data', response.data);
            setBeers(response.data)
          });
        
      }, [] );  // <- [] means: Run the effect only once, after initial render
    
  return (
    
    <div>
    <h3> <Header />
    All Beers</h3>
    {beers.map((beer) => (
        <div key={beer._id} className="card">
        <Link to={`/beers/${beer._id}`}><img style={{width: 80}} src={beer.image_url} alt="beer" /></Link>
          <h3>{beer.name}</h3>
          <p>{beer.tagline}</p>
          <p>{beer.contributed_by}</p>
        </div>
      ))}
    </div>
    
  )
}

export default AllBeers