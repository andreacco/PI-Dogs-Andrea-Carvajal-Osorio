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
                        <button className="cta">
                            <span>Lets Woof!</span>
                            <svg viewBox="0 0 13 10" height="10px" width="15px">
                            <path d="M1,5 L11,5"></path>
                            <polyline points="8 1 12 5 8 9"></polyline>
                            </svg>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}