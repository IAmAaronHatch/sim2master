import React, { Component } from 'react'
// import axios from 'axios'
import { Link } from 'react-router-dom'
// import { Route } from 'react-router-dom'



class Wizard extends Component {


    render() {
        return (
            <div>
                <h2>Add New Listing</h2>
                <Link to='/'><button>Cancel</button></Link>
            </div>
        )
    }
}

export default Wizard
