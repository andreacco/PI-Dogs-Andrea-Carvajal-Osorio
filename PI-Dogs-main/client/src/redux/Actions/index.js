import axios from 'axios';
export const GET_ALL_DOGS = 'GET_ALL_DOGS'
export const GET_DOG_DETAIL = 'GET_DOG_DETAIL'
export const CLEAR_DOG_DETAIL = 'CLEAR_DOG_DETAIL'
export const CREATE_DOG = 'CREATE_DOG'
export const SEARCH_DOG = 'SEARCH_DOG'
export const GET_TEMPERAMENTS = 'GET_TEMPERAMENTS'
export const FILTER_BY_DB_API_DOGS = 'FILTER_BY_DB_API_DOGS'
export const FILTER_BY_TEMPERAMENT = 'FILTER_BY_TEMPERAMENT'
export const SORT_BY = 'SORT_BY'
// export const FILTER_BY_API_DOGS = 'FILTER_BY_API_DOGS'
// export const ORDER_BY_ASC_WEIGHT = 'ORDER_BY_ASC_WEIGHT'
// export const ORDER_BY_DESC_WEIGHT = 'ORDER_BY_DESC_WEIGHT'
// export const ORDER_BY_ASC_NAME_ALL = 'ORDER_BY_ASC_NAME_ALL'
// export const ORDER_BY_DESC_NAME_ALL = 'ORDER_BY_DESC_NAME_ALL'
// export const ORDER_BY_ASC_NAME_API = 'ORDER_BY_ASC_NAME_API'
// export const ORDER_BY_DESC_NAME_API = 'ORDER_BY_DESC_NAME_API'
// export const ORDER_BY_ASC_NAME_DB = 'ORDER_BY_ASC_NAME_DB'
// export const ORDER_BY_DESC_NAME_DB = 'ORDER_BY_DESC_NAME_DB'

//Con Async Await
// export const getAllDogs = () => async dispatch => {
//     let json = await axios.get('http://localhost:3001/dogs')
//     return dispatch({
//         type: GET_ALL_DOGS, 
//         payload: json.data
//     })
// }
// Con promesas

export const getAllDogs = () => async dispatch => {
    return await axios.get('http://localhost:3001/dogs')
    .then(response => response.data)
    .then(Alldogs => {
        return dispatch({ type: GET_ALL_DOGS, payload: Alldogs })
    })
}

export const getDogDetail = (id) => async dispatch => {
    return await axios.get(`http://localhost:3001/dogs/${id}`)
    .then(response => response.data)
    .then(dog => {
        return dispatch({ type: GET_DOG_DETAIL, payload: dog })
    })
    // .catch(error => {
    //     return dispatch({type: GET_DOG_DETAIL, payload: error})
    // })
}

export const searchDog = (name) => async (dispatch) => {
        return await axios.get(`http://localhost:3001/dogs?name=${name}`)
        .then(response => response.data)
        .then((dog) => {
            return dispatch({ type: SEARCH_DOG, payload: dog })
        })
        .catch(error => {
            return dispatch ({ type: SEARCH_DOG, payload: error })
        })
    }

export const getTemperaments = () => async dispatch => {
    return await axios.get("http://localhost:3001/temperaments")
    .then(response => response.data)
    .then(temps => {
        return dispatch({ type: GET_TEMPERAMENTS, payload: temps })
    })
}

export const createDog = (newDog) => async () => {
    const response = await axios.post("http://localhost:3001/dogs", newDog)
    return response;
}

export const filterDogsDbApi = (filter) => {
    return {
        type: FILTER_BY_DB_API_DOGS, 
        payload: filter
    }
}

export const sortBy = (type) => {
    return {
        type: SORT_BY, 
        payload: type
    }
}

export const filterByTemperament = (temperament) => {
    return { 
        type: FILTER_BY_TEMPERAMENT, 
        payload: temperament 
    }
}

export const clearDogDetail = () => {
    return { 
        type: CLEAR_DOG_DETAIL
    }
}

// export const filterDogsApi = () => async dispatch => {
//     return await axios.get("http://localhost:3001/filterDogsApi")
//     .then(response => response.data)
//     .then(apiDog => {
//         return dispatch({ type: FILTER_BY_API_DOGS, payload: apiDog })
//     })
// }



// export const orderByWeightMin = () => async dispatch => {
//     return await axios.get("http://localhost:3001/orderByWeightMin")
//     .then(response => response.data)
//     .then(weightMin => {
//         return dispatch({ type: ORDER_BY_ASC_WEIGHT, payload: weightMin })
//     })
// }

// export const sort = (order, by) => async dispatch => {
//     if (order === "nameAsc" && by === "all") {
//         return await axios.get('http://localhost:3001/dogs')
//         .then(response => response.data)
//         .then(nameAsc => {
//             return dispatch({ type: ORDER_BY_ASC_NAME_ALL, payload: nameAsc, sort: order })
//         })
//     }
//     if (order === "nameDesc" && by === "all") {
//         return await axios.get("http://localhost:3001/filterByDescName")
//         .then(response => response.data)
//         .then(nameDesc => {
//             return dispatch({ type: ORDER_BY_DESC_NAME_ALL, payload: nameDesc, sort: order })
//         })
//     }
//     if (order === "weightAsc" && by === "all") {
//         return await axios.get("http://localhost:3001/orderByWeightMin")
//         .then(response => response.data)
//         .then(weightMin => {
//             return dispatch({ type: ORDER_BY_ASC_WEIGHT, payload: weightMin, sort: order })
//         })
//     }
//     if (order === "weightDesc" && by === "all") {
//         return await axios.get("http://localhost:3001/orderByWeightMax")
//         .then(response => response.data)
//         .then(weightMax => {
//             return dispatch({ type: ORDER_BY_DESC_WEIGHT, payload: weightMax, sort: order })
//         })
//     }
//     if (order === "nameAsc" && by === "API") {
//         return await axios.get("http://localhost:3001/orderByNameAscApi")
//         .then(response => response.data)
//         .then(nameAscApi => {
//             return dispatch({ type: ORDER_BY_ASC_NAME_API, payload: nameAscApi })
//         })
//     }
//     if (order === "nameDesc" && by === "API") {
//         return await axios.get("http://localhost:3001/orderByNameDescApi")
//         .then(response => response.data)
//         .then(nameDescApi => {
//             return dispatch({ type: ORDER_BY_DESC_NAME_API, payload: nameDescApi })
//         })
//     }
//     if (order === "weightAsc" && by === "API") {

//     }
//     if (order === "weightDesc" && by === "API") {

//     }
//     if (order === "nameAsc" && by === "DB") {
//         return await axios.get("http://localhost:3001/orderByNameAscDb")
//         .then(response => response.data)
//         .then(nameAscDb => {
//             return dispatch({ type: ORDER_BY_ASC_NAME_DB, payload: nameAscDb })
//         })
//     }
//     if (order === "nameDesc" && by === "DB") {
//         return await axios.get("http://localhost:3001/orderByNameDescDb")
//         .then(response => response.data)
//         .then(nameDescBb => {
//             return dispatch({ type: ORDER_BY_DESC_NAME_DB, payload: nameDescBb })
//         })
//     }
//     if (order === "weightAsc" && by === "DB") {

//     }
//     if (order === "weightDesc" && by === "DB") {

//     }
// }

// export const orderByWeightMax = () => async dispatch => {
//     return await axios.get("http://localhost:3001/orderByWeightMax")
//     .then(response => response.data)
//     .then(weightMax => {
//         return dispatch({ type: ORDER_BY_DESC_WEIGHT, payload: weightMax })
//     })
// }

// export const filterByAscName = () => async dispatch => {
//     return await axios.get('http://localhost:3001/dogs')
//     .then(response => response.data)
//     .then(nameAsc => {
//         return dispatch({ type: ORDER_BY_ASC_NAME_ALL, payload: nameAsc})
//     })
// }

// export const filterByDescName = () => async dispatch => {
//     return await axios.get("http://localhost:3001/filterByDescName")
//     .then(response => response.data)
//     .then(nameDesc => {
//         return dispatch({ type: ORDER_BY_DESC_NAME_ALL, payload: nameDesc })
//     })
// }

// export const orderByNameAscApi = () => async dispatch => {
//     return await axios.get("http://localhost:3001/orderByNameAscApi")
//     .then(response => response.data)
//     .then(nameAscApi => {
//         return dispatch({ type: ORDER_BY_ASC_NAME_API, payload: nameAscApi })
//     })
// }

// export const orderByNameDescApi = () => async dispatch => {
    // return await axios.get("http://localhost:3001/orderByNameDescApi")
    // .then(response => response.data)
    // .then(nameDescApi => {
    //     return dispatch({ type: ORDER_BY_DESC_NAME_API, payload: nameDescApi })
    // })
// }

// export const orderByNameAscDb = () => async dispatch => {
    // return await axios.get("http://localhost:3001/orderByNameAscDb")
    // .then(response => response.data)
    // .then(nameAscDb => {
    //     return dispatch({ type: ORDER_BY_ASC_NAME_DB, payload: nameAscDb })
    // })
// }

// export const orderByNameDescDb = () => async dispatch => {
    // return await axios.get("http://localhost:3001/orderByNameDescDb")
    // .then(response => response.data)
    // .then(nameDescBb => {
    //     return dispatch({ type: ORDER_BY_DESC_NAME_DB, payload: nameDescBb })
    // })
// }


