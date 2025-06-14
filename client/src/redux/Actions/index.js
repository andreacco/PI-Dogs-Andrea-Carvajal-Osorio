import axios from 'axios';
export const GET_ALL_DOGS = 'GET_ALL_DOGS'
export const GET_DOG_DETAIL = 'GET_DOG_DETAIL'
export const CLEAR_DOG_DETAIL = 'CLEAR_DOG_DETAIL'
export const CREATE_DOG = 'CREATE_DOG'
export const SEARCH_DOG = 'SEARCH_DOG'
export const GET_TEMPERAMENTS = 'GET_TEMPERAMENTS'
export const FILTER_BY_CREATED_DOGS = 'FILTER_BY_CREATED_DOGS'
export const FILTER_BY_TEMPERAMENT = 'FILTER_BY_TEMPERAMENT'
export const SORT_BY = 'SORT_BY'

export const getAllDogs = () => async dispatch => {
    try {
        await axios.get('https://wikidogs-back.onrender.com/dogs')
        // await axios.get('http://localhost:3001/dogs')
        // await axios.get('https://pi-dogs-andreacco.herokuapp.com/dogs')
        .then(response => response.data)
        .then(Alldogs => {
            return dispatch({ type: GET_ALL_DOGS, payload: Alldogs })
        })
    } catch (error) {
        console.log(error)
    }
}

export function createDog(newDog){
    return async function (dispatch){
        try {
            let res = await axios.post('https://wikidogs-back.onrender.com/dogs', newDog)
            // let res = await axios.post('http://localhost:3001/dogs', newDog)
            // let res = await axios.post('https://pi-dogs-andreacco.herokuapp.com/dogs', newDog)
            return dispatch({type: CREATE_DOG, payload: res.data})
        } catch (error) {
            console.log(error);
        }
    }
}

export function getDogDetail(id){
    return async function (dispatch){
        try {
            let res = await axios.get(`https://wikidogs-back.onrender.com/dogs/${id}`)
            // let res = await axios.get(`http://localhost:3001/dogs/${id}`)
            // let res = await axios.get(`https://pi-dogs-andreacco.herokuapp.com/dogs/${id}`)
            return dispatch({type: GET_DOG_DETAIL, payload: res.data})
        } catch (error) {
            console.log(error);
        }
    }
}

export function searchDog(name){
    return async function (dispatch){
        try {
            let dog = await axios.get(`https://wikidogs-back.onrender.com/dogs?name=${name}`)
            // let dog = await axios.get(`http://localhost:3001/dogs?name=${name}`)
            // let dog = await axios.get(`https://pi-dogs-andreacco.herokuapp.com/dogs?name=${name}`)
            return dispatch({type: SEARCH_DOG, payload: dog.data})
        } catch (error) {
            alert("There's no result for your search");
        }
    }
}

export const getTemperaments = () => async dispatch => {
    return await axios.get("https://wikidogs-back.onrender.com/temperaments")
    // return await axios.get("http://localhost:3001/temperaments")
    // return await axios.get("https://pi-dogs-andreacco.herokuapp.com/temperaments")
    .then(response => response.data)
    .then(temps => {
        return dispatch({ type: GET_TEMPERAMENTS, payload: temps })
    })
}

export const filterCreatedDogs = (filter) => {
    return {
        type: FILTER_BY_CREATED_DOGS, 
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
//     return await axios.get("https://pi-dogs-andreacco.herokuapp.com//filterDogsApi")
//     .then(response => response.data)
//     .then(apiDog => {
//         return dispatch({ type: FILTER_BY_API_DOGS, payload: apiDog })
//     })
// }



// export const orderByWeightMin = () => async dispatch => {
//     return await axios.get("https://pi-dogs-andreacco.herokuapp.com//orderByWeightMin")
//     .then(response => response.data)
//     .then(weightMin => {
//         return dispatch({ type: ORDER_BY_ASC_WEIGHT, payload: weightMin })
//     })
// }

// export const sort = (order, by) => async dispatch => {
//     if (order === "nameAsc" && by === "all") {
//         return await axios.get('https://pi-dogs-andreacco.herokuapp.com//dogs')
//         .then(response => response.data)
//         .then(nameAsc => {
//             return dispatch({ type: ORDER_BY_ASC_NAME_ALL, payload: nameAsc, sort: order })
//         })
//     }
//     if (order === "nameDesc" && by === "all") {
//         return await axios.get("https://pi-dogs-andreacco.herokuapp.com//filterByDescName")
//         .then(response => response.data)
//         .then(nameDesc => {
//             return dispatch({ type: ORDER_BY_DESC_NAME_ALL, payload: nameDesc, sort: order })
//         })
//     }
//     if (order === "weightAsc" && by === "all") {
//         return await axios.get("https://pi-dogs-andreacco.herokuapp.com//orderByWeightMin")
//         .then(response => response.data)
//         .then(weightMin => {
//             return dispatch({ type: ORDER_BY_ASC_WEIGHT, payload: weightMin, sort: order })
//         })
//     }
//     if (order === "weightDesc" && by === "all") {
//         return await axios.get("https://pi-dogs-andreacco.herokuapp.com//orderByWeightMax")
//         .then(response => response.data)
//         .then(weightMax => {
//             return dispatch({ type: ORDER_BY_DESC_WEIGHT, payload: weightMax, sort: order })
//         })
//     }
//     if (order === "nameAsc" && by === "API") {
//         return await axios.get("https://pi-dogs-andreacco.herokuapp.com//orderByNameAscApi")
//         .then(response => response.data)
//         .then(nameAscApi => {
//             return dispatch({ type: ORDER_BY_ASC_NAME_API, payload: nameAscApi })
//         })
//     }
//     if (order === "nameDesc" && by === "API") {
//         return await axios.get("https://pi-dogs-andreacco.herokuapp.com//orderByNameDescApi")
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
//         return await axios.get("https://pi-dogs-andreacco.herokuapp.com//orderByNameAscDb")
//         .then(response => response.data)
//         .then(nameAscDb => {
//             return dispatch({ type: ORDER_BY_ASC_NAME_DB, payload: nameAscDb })
//         })
//     }
//     if (order === "nameDesc" && by === "DB") {
//         return await axios.get("https://pi-dogs-andreacco.herokuapp.com//orderByNameDescDb")
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
//     return await axios.get("https://pi-dogs-andreacco.herokuapp.com//orderByWeightMax")
//     .then(response => response.data)
//     .then(weightMax => {
//         return dispatch({ type: ORDER_BY_DESC_WEIGHT, payload: weightMax })
//     })
// }

// export const filterByAscName = () => async dispatch => {
//     return await axios.get('https://pi-dogs-andreacco.herokuapp.com//dogs')
//     .then(response => response.data)
//     .then(nameAsc => {
//         return dispatch({ type: ORDER_BY_ASC_NAME_ALL, payload: nameAsc})
//     })
// }

// export const filterByDescName = () => async dispatch => {
//     return await axios.get("https://pi-dogs-andreacco.herokuapp.com//filterByDescName")
//     .then(response => response.data)
//     .then(nameDesc => {
//         return dispatch({ type: ORDER_BY_DESC_NAME_ALL, payload: nameDesc })
//     })
// }

// export const orderByNameAscApi = () => async dispatch => {
//     return await axios.get("https://pi-dogs-andreacco.herokuapp.com//orderByNameAscApi")
//     .then(response => response.data)
//     .then(nameAscApi => {
//         return dispatch({ type: ORDER_BY_ASC_NAME_API, payload: nameAscApi })
//     })
// }

// export const orderByNameDescApi = () => async dispatch => {
    // return await axios.get("https://pi-dogs-andreacco.herokuapp.com//orderByNameDescApi")
    // .then(response => response.data)
    // .then(nameDescApi => {
    //     return dispatch({ type: ORDER_BY_DESC_NAME_API, payload: nameDescApi })
    // })
// }

// export const orderByNameAscDb = () => async dispatch => {
    // return await axios.get("https://pi-dogs-andreacco.herokuapp.com//orderByNameAscDb")
    // .then(response => response.data)
    // .then(nameAscDb => {
    //     return dispatch({ type: ORDER_BY_ASC_NAME_DB, payload: nameAscDb })
    // })
// }

// export const orderByNameDescDb = () => async dispatch => {
    // return await axios.get("https://pi-dogs-andreacco.herokuapp.com//orderByNameDescDb")
    // .then(response => response.data)
    // .then(nameDescBb => {
    //     return dispatch({ type: ORDER_BY_DESC_NAME_DB, payload: nameDescBb })
    // })
// }


