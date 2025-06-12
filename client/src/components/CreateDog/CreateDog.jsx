import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { getTemperaments, createDog } from "../../redux/Actions";
import './CreateDog.css'

export default function CreateDog() {
    const dispatch = useDispatch()
    const history = useHistory()
    const allTemperaments = useSelector(state => state.temperaments)
    const allDogs = useSelector(state => state.allDogs)
    const [error, setErrors] = useState({})
    const [input, setInput] = useState({
        name: '',
        min_height: '',
        max_height: '',
        min_weight: '',
        max_weight: '',
        life_span_min: '',
        life_span_max: '',
        image: '',
        temperaments: []
    })
    useEffect(() => {
        dispatch(getTemperaments())
    }, [dispatch]);

    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        setErrors((validate({
            ...input,
            [e.target.name]: e.target.value
        })))
    }

    function handleSelect(e) {
        if(!input.temperaments.includes(e.target.value)){
            setInput({
                ...input,
                temperaments: [...input.temperaments, e.target.value]
            }) 
        }
        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
        }))
    }
    function handleSubmit(e) {
        e.preventDefault();
        if (!input.name || !input.min_height || !input.max_height || !input.min_weight || !input.max_weight || !input.temperaments.length) {
            alert("You must fill in all required fields")
        }
        else if (error.name || error.min_height || error.max_height || error.min_weight || error.max_weight || error.temperaments) {
            alert("Incorrect Data")
        }
        // eslint-disable-next-line
        else if (allDogs.find((d) => d.name.toLowerCase() == input.name.toLowerCase())) {
            alert("There's already a dog with that name!");
        }
        else {
            dispatch(createDog(input))
            alert('Dog created successfully!!')
            setInput({
                name: '',
                min_height: '',
                max_height: '',
                min_weight: '',
                max_weight: '',
                life_span_min: '',
                life_span_max: '',
                image: '',
                temperaments: []
            })
            history.push('/home')
        }
    }

    function handleDelete(e) {
        setInput({
            ...input,
            temperaments: input.temperaments.filter(t => t !== e)
        })
        setErrors(
            validate({
                ...input,
            })
        );
    }

    function validate(value) {
        let err = {}
        // eslint-disable-next-line
        let regex = new RegExp("^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$")
        //--------------------INIT NAME------------------------//

        if (!value.name) {
            err.name = "Name required"
        }
        if (value.name.length < 3 || value.name.length > 20) {
            err.name = "The name must have a length between 3 and 20 characters";
        } else if (/[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>\d/?~]/.test(value.name)) {
            err.name = "Only capital and lower case letters";
            // eslint-disable-next-line
        } else if (value.name.includes("-") || value.name.charAt(value.name.length - 1) == " " || value.name.charAt(0) == " ") {
            err.name = "Enter a valid name, mix of capital and lower case!";
        }

        //--------------------END NAME------------------------//

        //--------------------INIT HEIGHT------------------------//

        else if (!value.min_height && !value.max_height) {
            err.min_height = "Min Height required"
            err.max_height = "Max Height required"
        }
        else if (!Number(value.min_height) && !Number(value.max_height)) {
            err.min_height = "Value needs to be a Number"
            err.max_height = "Value needs to be a Number"
        }
        else if (Number(value.min_height) < 10 || Number(value.min_height) > 99) {
            err.min_height = 'The minimum height of the dog must contain at least 2 digits'
        }
        else if (Number(value.min_height) > Number(value.max_height)) {
            err.min_height = 'The minimum height of the breed cannot be greater than the maximum height'
        }
        else if (Number(value.max_height) < 10 || Number(value.max_height) > 999) {
            err.max_height = 'The maximum height of the dog must contain 2 to 3 digits'
        }
        else if (Number(value.min_height) > Number(value.max_height)) {
            err.max_height = 'The maximum height of the breed cannot be less than the minimum height'
        }
        //--------------------END HEIGHT------------------------//

        //--------------------INIT WEIGHT------------------------//

        else if (!value.min_weight && !value.max_weight) {
            err.min_weight = "Min Height required"
            err.max_weight = "Max Height required"
        }
        else if (!Number(value.min_weight) && !Number(value.max_weight)) {
            err.min_weight = "Value needs to be a Number"
            err.max_weight = "Value needs to be a Number"
        }
        else if (Number(value.min_weight) <= 1 || Number(value.min_weight) > 99) {
            err.min_weight = 'The minimum weight of the dog must contain a maximum of 2 digits';
        }
        else if (Number(value.min_weight) > Number(value.max_weight)) {
            err.min_weight = 'The minimum weight of the dog cannot be greater than the maximum weight';
        }
        else if (Number(value.max_weight) <= 1 || Number(value.max_weight) > 99) {
            err.max_weight = 'The maximum weight of the dog must contain a maximum of 2 digits';
        }
        else if (Number(value.min_weight) > Number(value.max_weight)) {
            err.max_weight = 'The maximum weight of the dog cannot be less than the minimum weight';
        }
        else if (Number(value.min_weight) > 9 && Number(value.max_weight) < 10) {
            err.max_weight = 'The maximum weight of the dog cannot be less than the minimum weight'
        }

        //--------------------END WEIGHT------------------------//

        //--------------------INIT LIFE SPAN------------------------//

        else if (!Number(value.life_span_min) && !Number(value.life_span_max)) {
            err.life_span_min = "Value needs to be a Number"
            err.life_span_max = "Value needs to be a Number"
        }
        else if (Number(value.life_span_min) < 1 || Number(value.life_span_min) > 99) {
            err.life_span_min = 'The minimum years of life of the dog must contain 1 to 2 digits'
        }
        else if (Number(value.life_span_min) > Number(value.life_span_max)) {
            err.life_span_min = 'The minimum life span of the dog cannot be greater than the maximum'
        }
        else if (Number(value.life_span_max) < Number(value.life_span_min)) {
            err.life_span_max = 'The maximum life span of the dog cannot be less than the minimum'
        }
        else if (Number(value.life_span_min) > 9 && Number(value.life_span_max) < 10) {
            err.life_span_max = 'The maximum life span of the dog cannot be less than the minimum'
        }

        //--------------------END LIFE SPAN------------------------//

        // else if(value.life_span_max > 20 || value.life_span_min <= 0 || value.life_span_max < value.life_span_min || value.life_span_min > value.life_span_max){
        //     err.life_span_min = "Value needs to be less than 20 and less than Life Span Max and greater than 0"
        //     err.life_span_max = "Value needs to be less than 20 and greater than Life Span Min and greater than 0"
        // }

        //--------------------INIT IMAGE------------------------//

        else if (regex.test(value.image) === false) {
            err.image = "Value needs to be an image URL"
        }

        //--------------------END IMAGE------------------------//

        //--------------------INIT TEMPERAMENTS------------------------//

        else if (!value.temperaments.length) {
            err.temperaments = "Temperaments required"
        }
        else if (value.temperaments.length === 5) {
            err.temperaments = "You can only add up to six temperaments";
        }

        //--------------------END TEMPERAMENTS------------------------//
        return err
    }

    return (
        <div className="CreateDogPage">
            <div className="backButton">
                <Link to="/home">
                    <button className="backo">
                        <span class="text">Go Back</span>
                    </button>
                </Link>
            </div>
            <div className="Formyy">
                <h1>Let's Create a Dog!!</h1>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div className="input-group">
                        <input className="input--style-2" placeholder="Breed Name:" type="text" name="name" value={input.name} onChange={(e) => handleChange(e)} />
                        {error.name && (<p className="error--p">{error.name}</p>)}
                    </div>
                    <div className="input-group">
                        <input className="input--style-2-2" placeholder="Min Height:" type="number" name="min_height" value={input.min_height} onChange={(e) => handleChange(e)} />
                    {/* </div>
                    <div className="input-group"> */}
                        <input className="input--style-2-2" placeholder="Max Height:" type="number" name="max_height" value={input.max_height} onChange={(e) => handleChange(e)} />
                        <div className="error">
                            {error.min_height && (<p>{error.min_height}</p>)}
                            {error.max_height && (<p>{error.max_height}</p>)}
                        </div>
                    </div>
                    <div className="input-group">
                        <input className="input--style-2-2" placeholder="Min Weight:" type="number" name="min_weight" value={input.min_weight} onChange={(e) => handleChange(e)} />
                    {/* </div>
                    <div className="input-group"> */}
                        <input className="input--style-2-2" placeholder="Max Weight:" type="number" name="max_weight" value={input.max_weight} onChange={(e) => handleChange(e)} />
                        <div className="error">
                        {error.min_weight && (<p>{error.min_weight}</p>)}
                        {error.max_weight && (<p>{error.max_weight}</p>)}
                        </div>
                    </div>
                    <div className="input-group">
                        <input className="input--style-2-2" placeholder="Life span Min:" type="number" name='life_span_min' value={input.life_span_min} onChange={(e) => handleChange(e)} />
                    {/* </div>
                    <div className="input-group"> */}
                        <input className="input--style-2-2" placeholder="Life span Max:" type="number" name='life_span_max' value={input.life_span_max} onChange={(e) => handleChange(e)} />
                        <div className="error">
                        {error.life_span_min && (<p>{error.life_span_min}</p>)}
                        {error.life_span_max && (<p>{error.life_span_max}</p>)}
                        </div>
                    </div>
                    <div className="input-group">
                        <input className="input--style-2" placeholder="Image URL:" type="text" name="image" value={input.image} onChange={(e) => handleChange(e)} />
                        {error.image && (<p className="error--p">{error.image}</p>)}
                    </div>
                    <div className="input-group">
                        <div className="rs-select2 js-select-simple select--no-search">
                            <select onChange={(e) => handleSelect(e)} name="temperaments" value={input.temperaments}>
                                <option>Temperaments</option>
                                {allTemperaments.map(t => {
                                    return <option value={t.name}>{t.name}</option>
                                })}
                            </select>
                            {error.temperaments && (<p>{error.temperaments}</p>)}
                        </div>
                    </div>
                </form>
                <div className="tempy">
                    {input.temperaments.map(t =>
                        <div className='temp'>
                            <h5>{t}</h5>
                            <button className="bu" onClick={() => handleDelete(t)}>X</button>
                        </div>
                    )}
                </div>
                <button className="Cretop" type="submit" onClick={(e) => handleSubmit(e)}>Create</button>
            </div>
        </div>
    )
}