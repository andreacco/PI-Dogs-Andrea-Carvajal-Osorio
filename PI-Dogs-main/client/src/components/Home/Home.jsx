import React, { useEffect, useState} from "react";
import { Link } from "react-router-dom";
import DogCard from "../DogCard/DogCard.jsx";
import { getAllDogs, getDogDetail, searchDog, filterDogsDbApi, sortBy, filterByTemperament, getTemperaments } from "../../redux/Actions/index.js";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "../Pagination/Pagination.jsx";
// import SearchBar from "../SearchBar/SearchBar.jsx";


export default function Home() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllDogs())
        dispatch(getTemperaments())
    }, [dispatch])
//-----------------------PAGINADO--------------------------//
    const allDogs = useSelector((state) => state.dogs)
    const [currentPage, setCurrentPage] = useState(1)
    const [dogsPerPage, setDogsPerPage] = useState(8);
    const indexOfLastDog = currentPage * dogsPerPage;
    const indexOfFirstDog = indexOfLastDog - dogsPerPage
    const currentDog = allDogs.slice(indexOfFirstDog, indexOfLastDog)
    console.log(allDogs.length)
    /* 1.
        indexOfLastDog = currentPage * dogsPerPage;
        indexOfLastDog =     1       *      8
                8
        indexOfFirstDog = indexOfLastDog - dogsPerPage
        indexOfFirstDog =       8        -      8
                0
        Va a agarrar todo mi areglo de perros y traerme solo los que le indico por params, pero el slice no toma en cuenta el index del segundo param sino un indice antes de ese
        currentDog = allDogs.slice(indexOfFirstDog, indexOfLastDog)
        currentDog = allDogs.slice(0, 8)
        ME VA A TRAER:
CONTEO:  1, 2, 3, 4, 5, 6, 7, 8
        [0, 1, 2, 3, 4, 5, 6, 7]
------------------PAGINA 2-------------
        2.
        indexOfLastDog = 16
        indexOfFirstDog = 8
        currentDog = allDogs.slice(8, 16)
        ME VA A TRAER:
CONTEO:  1, 2,  3,  4,  5,  6,  7,  8
        [8, 9, 10, 11, 12, 13, 14, 15]
    */

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber)
        setDogsPerPage(dogsPerPage)
    }

//----------------SEARCH BAR-------------------//
    const [input, setInput] = useState('')
    
    const handleChange = (e) => {
        e.preventDefault()
        setInput(e.target.value)
        dispatch(searchDog(e.target.value))
        setCurrentPage(1)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(searchDog(e.target.value))
        setInput('')
        setCurrentPage(1)
    }
//----------------SEARCH BAR-------------------//
//-------------------SORT---------------------//
// const sortFilter = useSelector(state => state.sortFilter.filterApiDb)
let currentSortFilter = useSelector(state => state.sortFilter)
const handleChangeSort = (e) => {
    e.preventDefault()
    dispatch(sortBy(e.target.value))
    // dispatch(filterByTemperament(currentSortFilter.filterTemps))
    // dispatch(filterDogsDbApi(currentSortFilter.filterApiDb))
    setCurrentPage(1)
}
//-------------------SORT---------------------//
//--------------FILTER DB OR API-------------//
const handleChangeBdApi = (e) => {
    e.preventDefault()
    dispatch(filterDogsDbApi(e.target.value))
    dispatch(filterByTemperament(currentSortFilter.filterTemps))
    dispatch(sortBy(currentSortFilter.sortType))
    setCurrentPage(1)
}
//--------------FILTER DB OR API-------------//
//----------FILTER  BY TEMPERAMENT----------//
const temperaments = useSelector(state => state.temperaments)
const handleChangeTemperament = (e) => {
    e.preventDefault()
    dispatch(filterDogsDbApi(currentSortFilter.filterApiDb))
    dispatch(filterByTemperament(e.target.value))
    dispatch(sortBy(currentSortFilter.sortType))
    setCurrentPage(1)
}

    return (
        <div>
            <div>
                <h1>Wikidogs</h1>
                <form onSubmit={e => handleSubmit(e)}>
                    <input 
                        type="text" 
                        placeholder="Search by breed"
                        name="name" 
                        value={input} 
                        onChange={e => handleChange(e)}
                        onKeyPress={e => e.key === "Enter" && handleSubmit(e)}
                    />
                </form>
                <h1>Hola Nombre!</h1>
                <span>
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
                </span>
                <Link to = "/home/create">
                <button>CreateDog</button>
                </Link>
            </div>
            <div>
                <h1>Soy el Home</h1>
                <div>
                {currentDog && currentDog.map((d) => {
                    return (
                        <Link to={`/home/${d.id}`} onClick={() => dispatch(getDogDetail(d.id))}>
                        <DogCard
                        key = {d.id}
                        id = {d.id}
                        image = {d.img}
                        name = {d.name}
                        minWeight = {d.min_weight}
                        maxWeight = {d.max_weight}
                        temperaments = {d.temperament}
                        />
                        </Link>
                )})}
                </div>
            </div>
            <div>
                <Pagination 
                dogsPerPage = {dogsPerPage} 
                allDogs = {allDogs.length}
                paginate = {paginate}
                />
            </div>
        </div>
    )
}

