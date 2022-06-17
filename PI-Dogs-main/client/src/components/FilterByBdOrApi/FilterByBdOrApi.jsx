import React, { useState } from "react";
import { useDispatch } from "react-redux";

export default function getDogsBy(by){
    const dispatch = useDispatch()

    const handleChange = (e) => {
        e.preventDefault()
        dispatch()
        dispatch()
        dispatch()
    }

    return (
        <div>
            <h2>Get Dogs By:</h2>
            <select name='getDogsBy'>
                <option value='all'>All Dogs</option>
                <option value='API'>API</option>
                <option value='DB'>DB</option>
            </select>
        </div>
    )
}