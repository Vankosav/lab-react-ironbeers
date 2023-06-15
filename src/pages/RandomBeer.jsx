import React from 'react'
import Header from '../components/Header';
import axios from 'axios';
import { useState, useEffect } from 'react';

function RandomBeer() {
    const [oneBeer, setOneBeer] = useState(null);


    useEffect(() => {
        axios
          .get(`https://ih-beers-api2.herokuapp.com/beers/random`)
          .then((response) => {
            setOneBeer(response.data);
          });
      }, []);
 
      return (
        <div>
          <Header />
          {oneBeer ? (
            <div key={oneBeer._id}>
            <img style={{width: 80}} src={oneBeer.image_url} alt="beer" />
              <h3>{oneBeer.name}</h3>
              <p>{oneBeer.tagline}</p>
             
              <p>{oneBeer.first_brewed}</p>
              <p> {oneBeer.attenuation_level}</p>
              <p>{oneBeer.description}</p>
              <p>{oneBeer.contributed_by}</p>
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      );
}

export default RandomBeer;