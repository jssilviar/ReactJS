import React from 'react'
import { NavLink } from 'react-router-dom'
import { CartWidget } from './CartWidget'


export default function NavBar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-2 sticky-top">
            <div class="container-fluid">
                <NavLink className="navbar-brand" to="/">Lady Di Cakes</NavLink>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <NavLink className="nav-link" to="/baking-pallet">Backing Pallet</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink className="nav-link" to="/catering">Catering</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink className="nav-link" to="/cakes">Cakes</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contactanos">Contáctanos</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/ubicanos">Ubícanos</NavLink>
                        </li>
                        <NavLink to="/cart">
                            <CartWidget numItems={ 0 } />
                        </NavLink>
                    </ul>
                </div>
            </div>
        </nav>
    )
}