import axios from 'axios'

let initialState = {
    houseList: [],
    name: '',
    address: '',
    city: '',
    state: '',
    zipcode: ''
}

const FULFILLED = '_FULFILLED'
const GET_HOUSES = 'GET_HOUSES'
const REMOVE_HOUSE = 'REMOVE_HOUSE'


export function getHouses() {
    let houseList = axios.get('/api/houses').then(results => {
        return results.data
        
    })
    return {
        type: GET_HOUSES,
        payload: houseList,
    }
}

export function removeHouse(id){
    let houseList = axios.delete(`/api/house/${id}`).then(results => {
        return results.data
    })
    return {
        type: REMOVE_HOUSE,
        payload: houseList,
    }
}


export default function reducer(state = initialState, action) {
    switch (action.type) {
//         case GET_HOUSES + FULFILLED:
//             return Object.assign({}, state, { houseList: action.payload })
        default: return state
    }
}