import '../styles/login.css'
import React from 'react'
import {connect} from 'react-redux'
const Home=(props)=>{
    return(
        <div className="login">
            <h1>{`Hello ${props.userDetails.usuario}!`}</h1>
            <p>{`Your id is ${props.userDetails._id}`}</p>
        </div>
    );
}

const mapStatoToProps =(state)=>{
    console.log('state', state);
    return {
        userDetails: state.login.userDetails,
    }
}

export default connect(mapStatoToProps,null)(Home);