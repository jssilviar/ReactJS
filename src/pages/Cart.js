import React from 'react'
import CartList from '../components/CartList'
import { useCart } from '../hooks/userCart'
import EmptyCart from './EmptyCart';

export default function Cart() {

    const carrito = useCart();
    const itemsCarrito = carrito.items;

    return (
        <div className='container'>
            {
                itemsCarrito.length > 0 ? <CartList /> : <EmptyCart/>
            }
        </div>
    )
}
