import React from 'react'
import {Link} from 'react-router-dom'

const LogoutFooter = () => {
    return (
        <ul>
            <h2>Applications</h2>
            <p>
            <Link to="/">Home</Link>&nbsp;&nbsp;&nbsp;
            <Link to="/todo">Todoapp</Link>&nbsp;&nbsp;&nbsp;
            <Link to="/calculator">Calculator</Link></p>

            <br/>
            <Link to="/login">Logout</Link>
        </ul>
    )
}

export default LogoutFooter