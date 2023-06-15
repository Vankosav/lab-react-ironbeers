import { useState, useEffect } from 'react';
import Header from '../components/Header';
import axios from 'axios';
import { useParams } from "react-router-dom";

function BeerDetails() {
  const [oneBeer, setOneBeer] = useState(null);

  const {beerId} = useParams();


  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
      .then((response) => {
        setOneBeer(response.data);
      });
  }, [beerId]);

  
 
  return (
    <div>
      <Header />
      {oneBeer ? (
        <div key={oneBeer._id}>
        <img style={{width: 80}} src={oneBeer.image_url} alt="beer" />
          <h3>{oneBeer.name}</h3>
          <p>{oneBeer.tagline}</p>
         
          <p>{oneBeer.first_brewed}</p>
          <p>{oneBeer.attenuation_level}</p>
          <p>{oneBeer.description}</p>
          <p>{oneBeer.contributed_by}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
export default BeerDetails;



