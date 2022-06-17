import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getAllDogs, searchDog } from "../../redux/Actions/index.js"

export default function SearchBar() {
    const dispatch = useDispatch()
    // useEffect(() => {
    //         dispatch(getAllDogs())
    //     })

//----------------SEARCH BAR-------------------//
    const [input, setInput] = useState('')
    
    const handleChange = (e) => {
        e.preventDefault()
        setInput(e.target.value)
        dispatch(searchDog(e.target.value))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(searchDog(e.target.value))
        setInput('')
    }
// //----------------SEARCH BAR-------------------//
// //-------------------SORT---------------------//
//     // const sortFilter = useSelector(state => state.sortFilter.filterApiDb)
//     let currentSortFilter = useSelector(state => state.sortFilter)
//     const handleChangeSort = (e) => {
//         e.preventDefault()
//         dispatch(sortBy(e.target.value))
//         // setCurrentPage(1)
//     }
// //-------------------SORT---------------------//
// //--------------FILTER DB OR API-------------//
//     const handleChangeBdApi = (e) => {
//         e.preventDefault()
//         dispatch(filterDogsDbApi(e.target.value))
//         dispatch(filterByTemperament(currentSortFilter.filterTemps))
//         dispatch(sortBy(currentSortFilter.sortType))
//         // setCurrentPage(1)
//     }
//     //--------------FILTER DB OR API-------------//
//     //----------FILTER  BY TEMPERAMENT----------//
//     const temperaments = useSelector(state => state.temperaments)
//     const handleChangeTemperament = (e) => {
//         e.preventDefault()
//         dispatch(filterDogsDbApi(currentSortFilter.filterApiDb))
//         dispatch(filterByTemperament(e.target.value))
//         dispatch(sortBy(currentSortFilter.sortType))
//         // setCurrentPage(1)
//     }
    return (
        <div>
            <h1>Wikidogs</h1>
            <form onSubmit={e => handleSubmit(e)}>
                <input 
                    type="text" 
                    placeholder="Search breed"
                    onChange={e => handleChange(e)}
                    name="name" 
                    value={input} 
                    onKeyPress={e => e.key === "Enter" && handleSubmit(e)}
                />
            </form>
            {/* <h1>Hola Nombre!</h1> */}
            {/* <span>
                <h2>Get Dogs By:</h2>
                <select onChange={(e) => handleChangeBdApi(e)} name='getDogsBy' defaultValue={"all"}>
                    <option value='all'>All Dogs</option>
                    <option value='API'>API</option>
                    <option value='DB'>DB</option>
                </select>
            </span>
            <span>
                <h2>Filter by Temperaments: </h2>
                <select onChange={(e) => handleChangeTemperament(e)} name='filterByTemp' defaultValue={"all"}>
                    <option value={"all"}>Temperaments</option>
                    {temperaments.map(t => (
                    <option value={t.name}>{t.name}</option>
                    ))}
                </select>
            </span>
            <span>
                <h2>Sort By: </h2>
                <select defaultValue={"nameAsc"} onChange={(e) => handleChangeSort(e)}>
                    <option value="nameAsc">Name A-Z</option>
                    <option value="nameDesc">Name Z-A</option>
                    <option value="weightAsc">Min/Max Weight</option>
                    <option value="weightDesc">Max/Min Weight</option>
                </select>
            </span> */}
        </div>
    )
}