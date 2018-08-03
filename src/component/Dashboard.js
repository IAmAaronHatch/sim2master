import React, { Component } from 'react'
// import axios from 'axios'
import House from './House'

class Dashboard extends Component {
    constructor() {
        super()

        this.state = {

        }
    }


    render() {
        return (
            <div>
                dashboard
                <House/>
            </div>
        )
    }
}

export default Dashboard
