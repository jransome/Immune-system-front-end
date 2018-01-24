import React, { Component } from 'react';

class Criteria extends Component {
    render(){
        // console.log(this.props) // { description: 'This is a criteria.' }
        return(
            <div className="criteria">
                { this.props.description }
            </div>
        )
    }
}

export default Criteria;