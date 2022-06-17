/* eslint-disable array-callback-return */
import { GET_ALL_DOGS, GET_DOG_DETAIL, CLEAR_DOG_DETAIL, CREATE_DOG, SEARCH_DOG, GET_TEMPERAMENTS, FILTER_BY_DB_API_DOGS, FILTER_BY_TEMPERAMENT, SORT_BY } from '../Actions'

const initialState = {
    dogs: [],
    allDogs: [],
    temperaments: [],
    dogDetail: {},
    sortFilter: {
        sortType: "all",
        filterTemps: "all",
        filterApiDB: "all"
    }
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_DOGS:
        // { type: GET_ALL_DOGS, payload: Alldogs }
        return {
            ...state, 
            dogs: action.payload,
            allDogs: action.payload
        }

        case GET_DOG_DETAIL:
        // { type: GET_DOG_DETAIL, payload: dog }
        return {
            ...state, 
            dogDetail: action.payload
        }

        case CLEAR_DOG_DETAIL:
        return {
            ...state, 
            dogDetail: {}
        }

        case SEARCH_DOG:
        // { type: SEARCH_DOG, payload: dog }
        // { type: SEARCH_DOG, payload: error }
        return {
            ...state, 
            dogs: action.payload
        }

        case CREATE_DOG:
        return {
            ...state
        }

        case GET_TEMPERAMENTS:
        // { type: GET_TEMPERAMENTS, payload: temps }
        return {
            ...state, 
            temperaments: action.payload
        }

        case FILTER_BY_DB_API_DOGS:
            const dbDogs = action.payload === "DB" ? state.dogs.filter(dog => dog.was_created) : state.dogs.filter(dog => !dog.was_created)
            return {
                ...state,
                dogs: action.payload === "all" ? state.allDogs : dbDogs,
                sortFilter: {
                    ...state.sortFilter,
                    filterApiDB: action.payload
                }
            }
        
        case FILTER_BY_TEMPERAMENT:
            if(action.payload !== "all") {
                const filteredDogs = state.dogs.filter((d) => d.temperament && d.temperament.includes(action.payload))
            return {
                ...state, 
                dogs: filteredDogs,
                sortFilter: {
                    ...state.sortFilter,
                    filterTemps: action.payload
                }
            }
        }
        else {
            return {
                ...state,
                dogs: state.allDogs,
                // sortFilter: {
                //     ...state.sortFilter,
                //     filterTemps: action.payload
                // }
            }
        }

        case SORT_BY:
            let sort = [];
            if(action.payload === "all") {
                return {
                    ...state,
                    dogs: state.allDogs,
                    sortFilter: {
                        ...state.sortFilter,
                        sortType: "all"
                    }
                }
            }
            if(action.payload === "nameAsc") {
                sort = state.dogs.sort((a, b) => a.name > b.name ? 1 : -1);
            }
            if(action.payload === "nameDesc") {
                sort = state.dogs.sort((a, b) => a.name > b.name ? -1 : 1);
            }
            if(action.payload === "weightAsc"){
                sort = state.dogs.sort((a, b) => {
                    if(a.min_weight && b.min_weight) {
                        if(a.min_weight === b.min_weight) {
                            if(a.max_weight > b.max_weight) {
                                return 1
                            }
                            else if(a.max_weight < b.max_weight) {
                                return -1
                            }
                        } else if (a.min_weight > b.min_weight) {
                            return 1
                            }
                        else {
                            return -1
                        }
                    }
                })
            }
            if(action.payload === "weightDesc"){
                sort = state.dogs.sort((a, b) => {
                    if(a.min_weight && b.min_weight) {
                        if(a.max_weight === b.max_weight) {
                            if(a.min_weight > b.min_weight) {
                                return -1
                            }
                            if (a.min_weight < b.min_weight) {
                                return  1
                            }
                        }
                        else if(a.max_weight > b.max_weight) {
                            return -1
                        }
                        else {
                            return 1
                        }
                    }
                })
            }
            return {
                ...state,
                dogs: [...sort],
                sortFilter: {
                    ...state.sortFilter,
                    sortType: sort
                }
            }
            
        default: 
            return {...state};
    }
}

export default rootReducer;