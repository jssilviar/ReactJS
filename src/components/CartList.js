import React, { useContext } from 'react';
import { CartContext } from '../contexts/cartContext';
import CartItem from './CartItem';

export default function CartList() {

    const {cartItems} = useContext(CartContext) 

  return <div>
      {cartItems.map(itemCart => {
          return <CartItem key={itemCart.id} item={itemCart}/>
      })}
  </div>;
}
