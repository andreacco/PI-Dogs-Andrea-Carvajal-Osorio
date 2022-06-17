import React, { Component } from "react";
import { connect } from "react-redux";
import "./DogCard.css"

export class DogCard extends Component {
    render() {
        return (
            <div className="Cardy" >
                <img className="dog-img" src={this.props.image} alt="dog-img" height="200px"/>
                <h1 className="dog-name" >{this.props.name}</h1>
                <div>
                    <h3>Weight</h3>
                    <p key={this.props.id}>{`${this.props.minWeight}Kg - ${this.props.maxWeight}Kg`}</p>
                </div>
                <h3>Temperaments:</h3>
                <div className="temp-container">{this.props.temperaments.split(", ").map((d, i) => (
                    <span className="temperaments" key={i}>{d}</span>
                ))}
                </div>
            </div>
        )
    }
}

export default connect()(DogCard)