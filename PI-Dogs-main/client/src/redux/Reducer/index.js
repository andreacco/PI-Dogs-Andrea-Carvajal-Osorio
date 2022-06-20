/* eslint-disable array-callback-return */
import { GET_ALL_DOGS, GET_DOG_DETAIL, CLEAR_DOG_DETAIL, CREATE_DOG, SEARCH_DOG, GET_TEMPERAMENTS, FILTER_BY_CREATED_DOGS, FILTER_BY_TEMPERAMENT, SORT_BY } from '../Actions'

const initialState = {
    dogs: [],
    allDogs: [],
    temperaments: [],
    dogDetail: {},
    sortFilter: { // Aqui es donde voy a guardar el filtro actual que quiere ver el cliente, asi es como puedo hacer todos los filtros a la vez
        // los ordenamientos son: 'nameAsc', 'nameDesc', 'weightAsc', 'weightDesc'
        sortType: "all", // este es mi caso default de los ordenamientos pero va a ir cambiando segun lo que el cliente quiera ven en pantalla
        // los filtros por temperamentos van cambiandose por el nombre del temperamento
        filterTemps: "all", //'all' es mi caso default, pero va a ir cambiando por el nombre del temperamento
        // los filtros por api o db son: 'all', 'API', 'DB'
        filterApiDB: "all" // 'all' es mi caso default pero va a ir cambiando segun lo que el cliente quiera ver en pantalla
    }
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_DOGS:
            return {
                ...state, 
                dogs: action.payload,
                allDogs: action.payload
            }
            
        case GET_DOG_DETAIL:
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
            return {
                ...state, 
                dogs: action.payload,
            }

        case CREATE_DOG:
            return {
                ...state
            }

        case GET_TEMPERAMENTS:
            return {
                ...state, 
                temperaments: action.payload
            }

        case FILTER_BY_CREATED_DOGS:
            const filteredDogs = action.payload === "DB" ? state.allDogs.filter(dog => dog.was_created) : state.allDogs.filter(dog => !dog.was_created)
            return {
                ...state,
                dogs: action.payload === "all" ? state.allDogs : filteredDogs,
                sortFilter: {
                    ...state.sortFilter,
                    filterApiDB: action.payload
                }
            }

        case FILTER_BY_TEMPERAMENT:
            const filteredDogsTemp = action.payload === 'all' ? state.dogs : state.dogs.filter((d) => {
                return d.temperaments && d.temperaments.includes(action.payload)
            });
            return {
                ...state,
                dogs: filteredDogsTemp,
                sortFilter: {
                    ...state.sortFilter,
                    filterTemps: action.payload
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
            return state;
    };
};

export default rootReducer;