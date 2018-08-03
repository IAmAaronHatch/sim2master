// import axios from 'axios'

let initialState = {
    houseList: [],
    name: '',
    address: '',
    city: '',
    state: '',
    zipcode: ''
}

// const FULFILLED = '_FULFILLED'
// const GET_HOUSES = 'GET_HOUSES'


// export function getHouses() {
//     let houseList = axios.get('/api/houses').then(results => {
//         return results.data
        
//     })
//     return {
//         type: GET_HOUSES,
//         payload: houseList,
//     }
// }


export default function reducer(state = initialState, action) {
    switch (action.type) {
//         case GET_HOUSES + FULFILLED:
//             return Object.assign({}, state, { houseList: action.payload })
        default: return state
    }
}