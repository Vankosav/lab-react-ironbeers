import { Link } from "react-router-dom"; 

function HomePage() {
    return (
        <div className="card">
            <Link to="/beers">
            <img src="/assets/beers.png" alt="beer"/>All Beers</Link>
            <br></br>
            <Link to="/random-beer">
            <img src="/assets/random-beer.png" alt="beer"/>Random Beer</Link>
            <br></br>
            <Link to="/new-beer">
            <img src="/assets/new-beer.png" alt="beer"/>New Beer</Link>
        </div>
    )
}

export default HomePage;