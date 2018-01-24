import React, { Component } from 'react';

class Criteria extends Component {
    render(){
        // console.log(this.props) // { description: 'This is a criteria.' }
        return(
            <div>
                { this.props.description }
            </div>
        )
    }
}

export default Criteria;