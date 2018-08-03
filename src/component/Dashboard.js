import React, { Component } from 'react'
import axios from 'axios'
import House from './House'

import {Link} from 'react-router-dom'
// import { connect } from 'react-redux'
// import {getHouses} from '../ducks/reducer'

class Dashboard extends Component {
    constructor(props) {
        super(props)

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

    deleteHouse=(id)=>{
        axios.delete(`/api/house/${id}`).then(results => {
            this.updateHouses(results.data)
        })
    }

    updateHouses = (houses) => {
        this.setState({houses})
    }


    render() {
        
        return (
            <div className='Main-DashBoard'>
                <h1>Dashboard</h1>
                    <Link to='/wizard'><button>Add New Property</button></Link>


                <h3>Home Listings</h3>
                {
                    this.state.houses.map((element, index) => {
                        return (
                            <House 
                            deleteHouse={this.deleteHouse}
                            id={element.id}
                            name={element.name}
                            address={element.address}
                            city={element.city}
                            state={element.state}
                            zipcode={element.zipcode}
                            />
                        )
                    })
                }
                
                
            </div>
        )
    }
}

// function mapStateToProps(state){
//     return {
//         houseList: state.houseList
//     }
// }

//NEXT STEP AS OF 11:08 mapSTATEtoProps!
// export default connect(mapStateToProps, {getHouses})(Dashboard)

export default Dashboard