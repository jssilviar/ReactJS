import { NavLink } from 'react-router-dom'
import { useCart } from '../hooks/userCart'
import { CartWidget } from './CartWidget'

export default function NavBar() {

    const carrito = useCart();

    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-2 sticky-top">
            <div class="container-fluid">
                <NavLink className="navbar-brand" to="/">Lady Di Cakes</NavLink>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
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