import React from 'react'
import { CartWidget } from './CartWidget'
import {ItemListContainer} from './ItemListContainer'


export default function NavBar() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Lady Di Cakes</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                            <a class="nav-link" href="#">Backing Pallet</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" href="#">Catering</a>
                            </li>
                            <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Cakes
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><a class="dropdown-item" href="#">Cumpleaños</a></li>
                                <li><a class="dropdown-item" href="#">Baby Shower</a></li>
                                <li><a class="dropdown-item" href="#">Graducación</a></li>
                                <li><a class="dropdown-item" href="#">Matrimonio</a></li>
                                <li><a class="dropdown-item" href="#">15 años</a></li>
                            </ul>
                            </li>
                        </ul>
                    </div>
                    <CartWidget numItems={ 0 } />
                </div>
            </nav> 
            <ItemListContainer/>
        </div>
    )
}