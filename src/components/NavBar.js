import React from 'react'
import { NavLink } from 'react-router-dom'
import { CartWidget } from './CartWidget'


export default function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg bg-2">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">Lady Di Cakes</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/baking-pallet">Backing Pallet</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/catering">Catering</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/cakes">Cakes</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contactanos">Contáctanos</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/ubicanos">Ubícanos</NavLink>
                        </li>
                    </ul>
                </div>
                <NavLink to="/cart">
                    <CartWidget numItems={ 0 } />
                </NavLink>
            </div>
        </nav>
    )
}