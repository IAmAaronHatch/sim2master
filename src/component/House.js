import React from 'react'
// import { connect } from 'react-redux'

function House (props) {
    return (
        <div>
            
            
            <p>Property Name: {props.name}</p>
            <p>Address: {props.address}</p>
            <p>City: {props.city}</p>
            <p>State: {props.state}</p>
            <p>Zipcode: {props.zipcode}</p>

            <button 
            // onClick={()=> this.props.removeHouse(props.id)}
            onClick={()=> props.deleteHouse(props.id)}
            >
            Delete</button>
        </div>
    )
}
// function mapStateToProps (state) {
//     return {
//         houseList: state.houseList
//     }
// }

// export default connect(mapStateToProps, {removeHouse})(House)
export default House