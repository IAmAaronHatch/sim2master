import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import axios from 'axios'
import {addHouse} from '../ducks/reducer'

class StepThree extends Component {
    constructor() {
        super()

        this.state = {
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
    }

    addHouse = () => {
        const { name, address, city, state, zipcode, image, mortgage, rent } = this.state
        const newHouse = { name, address, city, state, zipcode, image, mortgage, rent }
        axios.post('/api/house', newHouse).then(results => {
            this.setState({
                houseList: results.data,

            })
        })
    }

    render() {
        return (
            <div>
                

                <input type='number'
                placeholder='Monthly Mortgage Amount'/>
                <input type='number'
                placeholder='Desired Monthly Rent'/>
                
                <Link to='/wizard/step2'><button>Previous</button></Link>
                <Link to='/'><button 
                onClick={this.addHouse}
                >Complete</button></Link>
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        houseList: state.houseList
    }
}

export default connect(mapStateToProps, {addHouse})(StepThree)
