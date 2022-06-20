import React, { useEffect, useState } from "react";
import { useDispatch, useSelector} from "react-redux";
import { Link, useHistory} from "react-router-dom";
import { getTemperaments, createDog } from "../../redux/Actions";

export default function CreateDog(){
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
    useEffect(() =>{
        dispatch(getTemperaments())
    }, [dispatch]);

    function handleChange(e){
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })
        setErrors((validate({
            ...input,
            [e.target.name]: e.target.value
        })))
    }

    function handleSelect(e){
        setInput({
            ...input,
            temperaments: [...input.temperaments, e.target.value]
        })
        setErrors(validate({ 
            ...input, 
            [e.target.name]: e.target.value
        }))
    }
    
    function handleSubmit(e){
        e.preventDefault();
        if(!input.name || !input.min_height || !input.max_height || !input.min_weight || !input.max_weight || !input.temperaments.length) {
            alert("You must fill in all required fields")
        }
        else if(error.name || error.min_height || error.max_height || error.min_weight || error.max_weight || error.temperaments) {
            alert("Incorrect Data")
        }
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

    function handleDelete(e){
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

    function validate(value){
        let err={}
        let regex = new RegExp("^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$")
        if(!value.name){
            err.name = "Name required"
        }
        if (value.name.length < 3 || value.name.length > 20) {
            err.name = "The name must have a length between 3 and 20 characters";
          } else if (/[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>\d/?~]/.test(value.name)) {
            err.name = "Only capital and lower case letters";
          } else if (value.name.includes("-") || value.name.charAt(value.name.length - 1) == " " || value.name.charAt(0) == " ") {
            err.name = "Enter a valid name, mix of capital and lower case!";
          }
        else if(!value.min_height && !value.max_height){
            err.min_height = "Min Height required"
            err.max_height = "Max Height required"
        }
        else if(!Number(value.min_height) && !Number(value.max_height)){
              err.min_height = "Value needs to be a Number"
              err.max_height = "Value needs to be a Number"
            }
        else if(value.max_height > 80 || value.min_height <= 0 || value.max_height < value.min_height || value.min_height > value.max_height){
        err.min_height = "Value needs to be less than 80 and less than Height Max and greater than 0"
        err.max_height = "Value needs to be less than 80 and greater than Height Min and greater than 0"
        }
        else if(!value.min_weight && !value.max_weight){
            err.min_weight = "Min Height required"
            err.max_weight = "Max Height required"
        }
        else if(!Number(value.min_weight) && !Number(value.max_weight)){
            err.min_weight = "Value needs to be a Number"
            err.max_weight = "Value needs to be a Number"
        }
        else if(value.max_weight > 100 || value.min_weight <= 0 || value.max_weight < value.min_weight || value.min_weight > value.max_weight){
            err.min_weight = "Value needs to be less than 100 and less than Weight Max and greater than 0"
            err.max_weight = "Value needs to be less than 100 and greater than Weight Min and greater than 0"
        }
        else if(!Number(value.life_span_min) && !Number(value.life_span_max)){
            err.life_span_min = "Value needs to be a Number"
            err.life_span_max = "Value needs to be a Number"
        }
        else if(value.life_span_max > 20 || value.life_span_min <= 0 || value.life_span_max < value.life_span_min || value.life_span_min > value.life_span_max){
            err.life_span_min = "Value needs to be less than 20 and less than Life Span Max and greater than 0"
            err.life_span_max = "Value needs to be less than 20 and greater than Life Span Min and greater than 0"
        }
        else if(regex.test(value.image) === false) {
            err.image = "Value needs to be an image URL"
        }
        else if(!value.temperaments.length){
            err.temperaments = "Temperaments required"
        }
        else if (value.temperaments?.length === 5) {
            err.temperaments = "You can only add up to six temperaments";
        }
        return err
    }

    return (
        <div className="CreateDogPage">
            <Link to="/home"><button>Home</button></Link>
            <h1>Let's Create a Dog!!</h1>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div>
                    <label>Breed Name: </label>
                    <input type="text" name="name" value={input.name} onChange={(e) => handleChange(e)}/>
                    {error.name && (<p className="error">{error.name}</p>)}
                </div>
                <div>
                    <label>Min Height: </label>
                    <input type="number" name="min_height" value={input.min_height} onChange={(e) => handleChange(e)}/>
                    {error.min_height && (<p className="error">{error.min_height}</p>)}
                </div>
                <div>
                    <label>Max Height: </label>
                    <input type="number" name="max_height" value={input.max_height} onChange={(e) => handleChange(e)}/>
                    {error.max_height && (<p className="error">{error.max_height}</p>)}
                </div>
                <div>
                    <label>Min Weight: </label>
                    <input type="number" name="min_weight" value={input.min_weight} onChange={(e) => handleChange(e)}/>
                    {error.min_weight && (<p className="error">{error.min_weight}</p>)}
                </div>
                <div>
                    <label>Max Weight: </label>
                    <input type="number" name="max_weight" value={input.max_weight} onChange={(e) => handleChange(e)}/>
                    {error.max_weight && (<p className="error">{error.max_weight}</p>)}
                </div>
                <div>
                    <label>Life span Min: </label>
                    <input type="number" name='life_span_min' value={input.life_span_min} onChange={(e) => handleChange(e)}/>
                    {error.life_span_min && (<p className="error">{error.life_span_min}</p>)}
                </div>
                <div>
                    <label>Life span Max: </label>
                    <input type="number" name='life_span_max' value={input.life_span_max} onChange={(e) => handleChange(e)}/>
                    {error.life_span_max && (<p className="error">{error.life_span_max}</p>)}
                </div>
                <div>
                    <label>Image URL: </label>
                    <input type="text" name="image" value={input.image} onChange={(e) => handleChange(e)}/>
                    {error.image && (<p className="error">{error.image}</p>)}
                </div>
                <label>Temperaments: </label>
                <select onChange={(e)=>handleSelect(e)} name="temperaments" value={input.temperaments}>
                    {allTemperaments.map(t =>{
                        return <option  value={t.name}>{t.name}</option>
                    })}
                </select>
                {error.temperaments && (<p className="error">{error.temperaments}</p>)}
            </form>
                 <button type="submit" onClick={(e) => handleSubmit(e)}>Create</button>
            {input.temperaments.map(t =>
                <div className='temp'>
                    <p>{t}</p>
                    <button className="button" onClick={() => handleDelete(t)}>X</button>
                    </div>
                    )}
            <div className="backButton">
            </div>
        </div>
    )
}