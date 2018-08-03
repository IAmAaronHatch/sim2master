import React, { Component } from 'react'
// import axios from 'axios'
import House from './House'

import {Link} from 'react-router-dom'
import axios from 'axios'

class Dashboard extends Component {
    constructor() {
        super()

        this.state = {
            houses: [],
        }
    }

    componentDidMount(){
        axios.get('/api/houses').then(results => {
            this.setState({
                houses: results.data
            })
        })
    }


    render() {
        let mappedHouses = this.state.houses.map(() => {
            return (
                <House />
            )
        })
        return (
            <div>
                Dashboard!!
                {mappedHouses}
                {/* map over the list in render, return House for each house */}
                <Link to='/wizard'><button>Add New Property</button></Link>
            </div>
        )
    }
}

//NEXT STEP AS OF 11:08 mapSTATEtoProps!
export default Dashboard
