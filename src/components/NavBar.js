import { NavLink } from 'react-router-dom'
import { useCart } from '../hooks/userCart'
import { CartWidget } from './CartWidget'

export default function NavBar() {

    const carrito = useCart();

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-2 sticky-top">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">
                    <img src="../logoText.png" alt="logo" width="35" height="35" className="d-inline-block align-text-top me-2"/>
                    Lady Di Cakes
                </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
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
                            <CartWidget numItems={ carrito.length } />
                        </NavLink>
                    </ul>
                </div>
            </div>
        </nav>
    )
}