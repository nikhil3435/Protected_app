import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import {connect} from 'react-redux'


const ProtectedRoute = ({comp: Component,auth, ...rest}: any) => {
    return (
        <Route 
        {...rest}
        render={props => {
            const path= window.location.pathname
            return auth ? (
                <Component {...props} />
            ):
            (
                <Redirect to={`/login?${path}`} />
            )
            }}
        />
    )
}

const mapStateToProps = (state: {LoginReducer: any}) => {
    return {
        auth: state.LoginReducer.loggedin
    }
}

export default connect(mapStateToProps)(ProtectedRoute)