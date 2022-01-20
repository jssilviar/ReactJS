import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { CartContext } from '../contexts/cartContext'
import { CartWidget } from './CartWidget'


export default function NavBar() {

    const {cartItems} = useContext(CartContext) 

    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-2 sticky-top">
            <div class="container-fluid">
                <NavLink className="navbar-brand" to="/">Lady Di Cakes</NavLink>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/category/backingPallet">Backing Pallet</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/category/catering">Catering</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/category/cakes">Cakes</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contactanos">Contáctanos</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/ubicanos">Ubícanos</NavLink>
                        </li>
                        <NavLink to="/cart">
                            <CartWidget numItems={ cartItems.length } />
                        </NavLink>
                    </ul>
                </div>
            </div>
        </nav>
    )
}