import React from 'react'
import {Link} from 'react-router-dom'

const HomeFooter = () => {
    return (
        <ul>
            <p>
                <h2>Applications</h2>
                <Link to="/todo">Todoapp</Link><br/><br/>
                <Link to="/calculator">Calculator</Link>
            </p>
        </ul>
    )
}

export default HomeFooter
