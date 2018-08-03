import React, { Component } from 'react'
// import axios from 'axios'
import House from './House'

import {Link} from 'react-router-dom'

class Dashboard extends Component {
    constructor() {
        super()

        this.state = {

        }
    }


    render() {
        return (
            <div>
                Dashboard!!
                <House/>

                <Link to='/wizard'><button>Add New Property</button></Link>
            </div>
        )
    }
}

export default Dashboard
