import React from 'react';
import { Link } from 'react-router-dom';

export default function EmptyCart() {
  return (
    <>
        <div>Tu carrito está vacío</div>
        <Link to="/">
            <button className='btn btn-warning font-semibold'>Regresar a tienda</button>
        </Link>
    </>);
}
