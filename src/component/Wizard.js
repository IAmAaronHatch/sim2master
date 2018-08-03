import React, { Component } from 'react'
// import axios from 'axios'
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'
import StepOne from './Step1'
import StepTwo from './Step2'
import StepThree from './Step3'
import '../App.css';


class Wizard extends Component {
    render() {
        return (
            <div>
                <h2>Add New Listing</h2>
                <Link to='/'><button>Cancel</button></Link>
                <Route path='/wizard/step1' component={StepOne}/>
                <Route path='/wizard/step2' component={StepTwo}/>
                <Route path='/wizard/step3' component={StepThree}/>
            </div>
        )
    }
}

export default Wizard
