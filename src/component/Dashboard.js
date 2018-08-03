import React, { Component } from 'react'
import axios from 'axios'
import House from './House'

import {Link} from 'react-router-dom'
// import { connect } from 'react-redux'
// import {getHouses} from '../ducks/reducer'

class Dashboard extends Component {
    constructor() {
        super()

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


    render() {
        
        return (
            <div className='Main-DashBoard'>
                Dashboard!!
                {
                    this.state.houses.map((element, index) => {
                        return (
                            <House houses={element}/>
                        )
                    })
                }
                
                
                <Link to='/wizard'><button>Add New Property</button></Link>
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