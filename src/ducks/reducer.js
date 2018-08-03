import axios from 'axios'

let initialState = {
    houseList: [],
    name: '',
    address: '',
    city: '',
    state: '',
    zipcode: 0,
    image: '',
    mortgage: 0,
    rent: 0,
}

const FULFILLED = '_FULFILLED'
const GET_HOUSES = 'GET_HOUSES'
const REMOVE_HOUSE = 'REMOVE_HOUSE'
const ADD_NAME = 'ADD_NAME'
const ADD_ADDRESS = 'ADD_ADDRESS'
const ADD_CITY = 'ADD_CITY'
const ADD_STATE = 'ADD_STATE'
const ADD_ZIPCODE = 'ADD_ZIPCODE'
const ADD_IMAGE = 'ADD_IMAGE'
const ADD_MORTGAGE = 'ADD_MORTGAGE'
const ADD_RENT = 'ADD_RENT'


export function getHouses() {
    let houseList = axios.get('/api/houses').then(results => {
        return results.data

    })
    return {
        type: GET_HOUSES,
        payload: houseList,
    }
}

export function removeHouse(id) {
    let houseList = axios.delete(`/api/house/${id}`).then(results => {
        return results.data
    })
    return {
        type: REMOVE_HOUSE,
        payload: houseList,
    }
}

export function addName(name) {
    return {
        type: ADD_NAME,
        payload: name
    }
}
export function addAddress(address) {
    return {
        type: ADD_ADDRESS,
        payload: address
    }
}
export function addCity(city) {
    return {
        type: ADD_CITY,
        payload: city
    }
}
export function addState(state) {
    return {
        type: ADD_STATE,
        payload: state
    }
}
export function addZipcode(zipcode) {
    return {
        type: ADD_ZIPCODE,
        payload: zipcode
    }
}
export function addImage(image) {
    return {
        type: ADD_IMAGE,
        payload: image
    }
}
export function addMortgage(mortgage) {
    return {
        type: ADD_MORTGAGE,
        payload: mortgage
    }
}
export function addRent(rent) {
    return {
        type: ADD_RENT,
        payload: rent
    }
}


export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_HOUSES + FULFILLED:
            return Object.assign({}, state, { houseList: action.payload })
        // case REMOVE_HOUSE + FULFILLED:
        //     return Object.assign({}, state, {})
        case ADD_NAME + FULFILLED:
            return Object.assign({}, state, {name:action.paylaod})
        case ADD_ADDRESS + FULFILLED:
            return Object.assign({}, state, { address: action.paylaod})
        case ADD_CITY + FULFILLED:
            return Object.assign({}, state, { city: action.paylaod})
        case ADD_STATE + FULFILLED:
            return Object.assign({}, state, { state: action.paylaod})
        case ADD_ZIPCODE + FULFILLED:
            return Object.assign({}, state, { zipcode: action.paylaod})
        case ADD_IMAGE + FULFILLED:
            return Object.assign({}, state, { image: action.paylaod})
        case ADD_MORTGAGE + FULFILLED:
            return Object.assign({}, state, { mortgage: action.paylaod})
        case ADD_RENT + FULFILLED:
            return Object.assign({}, state, { rent: action.paylaod})
        default: return state
    }
}