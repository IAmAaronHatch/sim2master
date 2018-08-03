import React, { Component } from 'react'
// import axios from 'axios'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { addName, addAddress, addCity, addState, addZipcode } from '../ducks/reducer'



class StepOne extends Component {
    render() {
        return (
            <div>
                <input type='text' 
                //value={this.state.name} 
                onChange={this.props.addName} 
                placeholder='name' />

                <input type='text' 
                // value={this.state.address} 
                onChange={this.props.addAddress} 
                placeholder='address' />

                <input type='text' 
                // value={this.state.city} 
                onChange={this.props.addCity} 
                placeholder='city' />

                <input type='text' 
                // value={this.state.state} 
                onChange={this.props.addState} 
                placeholder='state' />

                <input type='number' 
                // value={this.state.zipcode} 
                onChange={this.props.addZipcode}  
                placeholder='zipcode' />

                <Link to='/'><button>Back</button></Link>
                <Link to='/wizard/step2'><button>Next</button></Link>
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        name: state.name,
        address: state.address,
        city: state.city,
        state: state.state,
        zipcode: state.zipcode
    }
}

export default connect(mapStateToProps, {addName, addAddress, addCity, addState, addZipcode})(StepOne)
