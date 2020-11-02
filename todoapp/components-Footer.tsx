import React from 'react'
import FilterLink from './containers-FilterLink'

const Footer = () => (
    <div>
        Show:
        {' '}
        <FilterLink filter='SHOW_ALL' >
            All Todos 
        </FilterLink>
        {' '}
        <FilterLink filter='SHOW_ACTIVE'>
            Active Todos
        </FilterLink>
        {' '}
        <FilterLink filter='SHOW_COMPLETED'>
            Completed Todos
        </FilterLink>
    </div>
)

export default Footer
