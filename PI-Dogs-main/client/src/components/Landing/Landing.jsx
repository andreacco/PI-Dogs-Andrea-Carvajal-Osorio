import React from "react";
import { Link } from "react-router-dom";
import './Landing.css'

export default function Landing(){
    return (
        <div className = "landingPage">
            <div className = "Card">
                <h1 className = "title">Wikidogs</h1>
                <h2 className = "description">Welcome Doggie Lovers!!</h2>
                <div className = "wrap">
                    <form className="formulario" name="insertName">
                        <div className="input-group">
                            <input id = "nombre" type="text" name="name"/>
                            <label className = "label" for = "campoNombre">Type your Name</label>
                        </div>
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
                    </form>
                </div>
            </div>
        </div>
    )
}