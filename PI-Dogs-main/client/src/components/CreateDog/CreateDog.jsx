import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux"

export default function CreateDog(){

    return (
        <div className="CreateDogPage">
            <h1>Let's Create a Dog!!</h1>
            <form>
                <label>Breed Name: </label>
                <input type="text" name="name"/>
                <label>Min Height: </label>
                <input type="number" name="min_height"/>
                <label>Max Height: </label>
                <input type="number" name="max_height"/>
                <label>Min Weight: </label>
                <input type="number" name="min_weight"/>
                <label>Max Weight: </label>
                <input type="number" name="max_weight"/>
                <select name="temperaments">
                    <option value=''>Temperaments:</option>
                </select>
                {/* <label>Temperaments: </label>
                <input type="checkbox" name="temperaments"/> */}
                <label>Image URL: </label>
                <input type="url" name="image_url"/>
                <button type="submit">Create</button>
            </form>
            <div className="backButton">
                <Link to = "/home">
                    <button>Go Back</button>
                </Link>
            </div>
        </div>
    )
}