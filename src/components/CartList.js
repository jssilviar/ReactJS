import React from 'react';
import { useCart } from '../hooks/userCart';
import CartItem from './CartItem';

export default function CartList() {

    const carrito = useCart();

  return <div>
      {carrito.items.map(itemCart => {
          return <CartItem key={itemCart.id} item={itemCart}/>
      })}
  </div>;
}
