import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTeams } from '../../actions/TeamActions';
import { bindActionCreators } from 'redux';
import { get } from 'http';

const TeamLogin = (props) => {
    console.log(props.teams);
    return (
    <button onClick={props.getTeams}>TEST</button>
    );
}

function mapStateToProps(state) {
    return {
       teams: state.teams
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getTeams: getTeams }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(TeamLogin);