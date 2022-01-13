import React from 'react'
import { CartWidget } from './CartWidget'


export default function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg bg-2">
            <div className="container-fluid">
                <a className="navbar-brand" href='./'>Lady Di Cakes</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href='./'>Backing Pallet</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href='./'>Catering</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href='./'>Cakes</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href='./'>Contáctanos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href='./'>Ubícanos</a>
                        </li>
                    </ul>
                </div>
                <CartWidget numItems={ 0 } />
            </div>
        </nav>
    )
}