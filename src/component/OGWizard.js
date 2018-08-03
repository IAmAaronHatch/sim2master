import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'



class Wizard extends Component {
    constructor() {
        super()

        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zipcode: 0,
            houses: [],

        }
    }

    handleName = (e) => {
        this.setState({
            name: e.target.value
        })
    }
    handleAddress = (e) => {
        this.setState({
            address: e.target.value
        })
    }
    handleCity = (e) => {
        this.setState({
            city: e.target.value
        })
    }
    handleState = (e) => {
        this.setState({
            state: e.target.value
        })
    }
    handleZip = (e) => {
        this.setState({
            zipcode: e.target.value
        })
    }


    addHouse = () => {
        const { name, address, city, state, zipcode } = this.state
        const newHouse = { name, address, city, state, zipcode }
        axios.post('/api/house', newHouse).then(results => {
            this.setState({
                houses: results.data,

            })
        })
    }


    render() {
        return (
            <div>
                <h2>Add New Listing</h2>
                <Link to='/'><button>Cancel</button></Link>

                <input type='text' value={this.state.name} onChange={this.handleName} placeholder='name' />


                <input type='text' value={this.state.address} onChange={this.handleAddress} placeholder='address' />


                <input type='text' value={this.state.city} onChange={this.handleCity} placeholder='city' />


                <input type='text' value={this.state.state} onChange={this.handleState} placeholder='state' />


                <input type='number' value={this.state.zipcode} onChange={this.handleZip} placeholder='zipcode' />

                <button onClick={this.addHouse}>Add House</button>
                <Link to='/'><button onClick={this.addHouse}>Home</button></Link>

            </div>
        )
    }
}

export default Wizard
