import React, { Component } from 'react'
// import axios from 'axios'
import { Link } from 'react-router-dom'


class StepTwo extends Component {
    render() {
        return (
            <div>
                

                <input type='text'
                placeholder='imageUrl'
                />

                <Link to='/wizard/step1'><button>Previous</button></Link>
                <Link to='/wizard/step3'><button>Next</button></Link>
            </div>
        )
    }
}

export default StepTwo
