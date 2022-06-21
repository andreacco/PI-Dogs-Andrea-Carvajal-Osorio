import React from "react";
import { Link } from "react-router-dom";
import './Landing.css'

export default function Landing(){
    return (
        <div className = "landingPage">
            <div className = "Card">
                <h1 className = "title">Wikidogs</h1>
                <h2 className = "description">Welcome Doggie Lovers!!</h2>
                <div className="button">
                    <Link to = "/home">
                        <button className = "boton">
                                <span className = "dog">
                                    <span className="flecha">
                                    </span>
                                </span>
                                <span className="texto-boton" >Lets Woof!</span>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}