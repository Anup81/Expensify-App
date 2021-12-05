import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () =>(
    <div>
        <h1>Expensify</h1>
        <NavLink activeClassName='is_active' to="/" exact={true}>Dashboard</NavLink>
        <NavLink activeClassName='is_active' to="/create">Create Expenses</NavLink>
        {/* <NavLink activeClassName='is_active' to="/edit">Edit Expense</NavLink> */}
        <NavLink activeClassName='is_active' to="/help">Help</NavLink>
    </div>
)

export default Header;