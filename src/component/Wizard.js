import React, { Component } from 'react'
// import axios from 'axios'

import { Link } from 'react-router-dom'

class Wizard extends Component {
    constructor() {
        super()

        this.state = {

        }
    }


    render() {
        return (
            <div>
            Wizard

            <Link to='/'><button>Cancel</button></Link>
            </div>
        )
    }
}

export default Wizard
