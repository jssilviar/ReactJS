import React from 'react';
import { useCart } from '../hooks/userCart';
import CartItem from './CartItem';
import Checkout from './Checkout';

export default function CartList() {

    const carrito = useCart()
    const items = carrito.items;

    return (
        <div className='row'>
            <div className='col-7'>
            <h4>Detalle de la compra: </h4>
            {
                items.map(itemCart => {
                    return <CartItem  key={itemCart.id} item={itemCart}/>
                })
            }
            </div>
            <div className='col-5'>
                <Checkout item={items}/>
            </div>
        </div>);
}
