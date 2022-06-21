import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DogCard from "../DogCard/DogCard.jsx";
import { getAllDogs, searchDog, getTemperaments, filterCreatedDogs, sortBy, filterByTemperament } from "../../redux/Actions/index.js";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "../Pagination/Pagination.jsx";
import './Home.css'


export default function Home() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllDogs())
        dispatch(getTemperaments())
        // dispatch(sortBy("nameAsc"))
    }, [dispatch])
    //-------------------INIT PAGINADO----------------------//
    const allDogs = useSelector((state) => state.dogs)
    const [currentPage, setCurrentPage] = useState(1)
    const [dogsPerPage, setDogsPerPage] = useState(8);
    const indexOfLastDog = currentPage * dogsPerPage;
    const indexOfFirstDog = indexOfLastDog - dogsPerPage
    const currentDog = allDogs.slice(indexOfFirstDog, indexOfLastDog)
    console.log(allDogs.length)

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber)
        setDogsPerPage(dogsPerPage)
    }
    //-------------------END PAGINADO---------------------//

    //----------------INIT RECARGAR PERROS---------------//

    function handleClick(e) {
        e.preventDefault()
        dispatch(getAllDogs())
    }

    //---------------END RECARGAR PERROS-----------------//

    //-----------------INIT SEARCH BAR--------------------//
    const [input, setInput] = useState('')

    const handleChange = (e) => {
        e.preventDefault()
        setInput(e.target.value)
        // dispatch(searchDog(e.target.value))
        // setCurrentPage(1)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(searchDog(e.target.value))
        setInput('')
        setCurrentPage(1)
    }
    //------------------END SEARCH BAR-------------------//

    //--------------------INIT SORT----------------------//
    // const sortFilter = useSelector(state => state.sortFilter.filterApiDB)

    // let currentSortFilter = useSelector(state => state.sortFilter)
    const handleChangeSort = (e) => {
        e.preventDefault()
        dispatch(sortBy(e.target.value))
        // dispatch(filterByTemperament(currentSortFilter.filterTemps))
        // dispatch(filterCreatedDogs(currentSortFilter.filterApiDB))
        setCurrentPage(1)
    }
    //--------------------END SORT----------------------//

    //----------------FILTER DB OR API-----------------//
    const handleChangeBdApi = (e) => {
        e.preventDefault()
        dispatch(filterCreatedDogs(e.target.value))
        // dispatch(filterByTemperament(currentSortFilter.filterTemps))
        // dispatch(sortBy(currentSortFilter.sortType))
        setCurrentPage(1)
    }
    //----------------FILTER DB OR API-----------------//

    //---------------FILTER TEMPERAMENT----------------//
    const temperaments = useSelector(state => state.temperaments)
    const handleChangeTemperament = (e) => {
        e.preventDefault()
        // dispatch(filterCreatedDogs(currentSortFilter.filterApiDB))
        dispatch(filterByTemperament(e.target.value))
        // dispatch(sortBy(currentSortFilter.sortType))
        setCurrentPage(1)
    }
    //-------------END FILTER TEMPERAMENT-------------//

    //------------------INIT RETURN------------------//
    return (
        <div className="Home">
            <div className="ContainerFunctions">
                <div className="LineOne">
                    <div className="eachOne">
                        <h1>Wikidogs</h1>
                    </div>
                    <div className="eachOne">
                        <button onClick={e => handleClick(e)} className="buttonReload">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>Reload Dogs
                        </button>
                    </div>
                    <div className="eachOne">
                        <Link to="/home/create">
                            <button className="buttonCreate">Create Dog</button>
                        </Link>
                    </div>
                </div>
                <span>
                    <h2>Get Dogs By:</h2>
                    <select onChange={(e) => handleChangeBdApi(e)}>
                        <option value='all'>All Dogs</option>
                        <option value='API'>API</option>
                        <option value='DB'>Created</option>
                    </select>
                </span>
                <span>
                    <h2>Filter by Temperaments: </h2>
                    <select onChange={(e) => handleChangeTemperament(e)} value="all" >
                        <option >Temperaments</option>
                        {temperaments && temperaments.map(t => (
                            <option value={t.name} key={t.id}>{t.name}</option>
                        ))}
                    </select>
                </span>
                <span>
                    <h2>Sort By: </h2>
                    <select defaultValue="nameAsc" onChange={(e) => handleChangeSort(e)}>
                        <option value="nameAsc">Name A-Z</option>
                        <option value="nameDesc">Name Z-A</option>
                        <option value="weightAsc">Min/Max Weight</option>
                        <option value="weightDesc">Max/Min Weight</option>
                    </select>
                </span>
                <div class="group">
                    <form onSubmit={e => handleSubmit(e)}>
                        <svg class="icon" aria-hidden="true" viewBox="0 0 24 24"><g><path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path></g></svg>
                        <input
                            className="input"
                            type="text"
                            placeholder="Search by breed"
                            name="name"
                            value={input}
                            onChange={e => handleChange(e)}
                            onKeyPress={e => e.key === "Enter" && handleSubmit(e)}
                        />
                    </form>
                </div>
            </div>
            <div>
                {currentDog.length === 0 && currentDog ? <p>Loading...</p> :
                    currentDog.map((d) => {
                        return (
                            <DogCard
                                key={d.id}
                                id={d.id}
                                image={d.image}
                                name={d.name}
                                minWeight={d.min_weight}
                                maxWeight={d.max_weight}
                                temperaments={d.temperaments}
                                was_created={d.was_created}
                            />
                        )
                    })
                }
            </div>
            <div>
                <Pagination
                    dogsPerPage={dogsPerPage}
                    allDogs={allDogs.length}
                    paginate={paginate}
                />
            </div>
        </div>
    )
}


{/* <select onChange={(e) => handleChangeTemperament(e)} name='filterByTemp' defaultValue={"all"}>
                        <option value="all">Temperaments</option>
                        {temperaments.map(t => (
                        <option value={t.name}>{t.name}</option>
                        ))}
                    </select> */}