import React from 'react';
import { useCart } from '../hooks/userCart';

export default function Checkout({items}) {
  console.log(items);

  const carrito = useCart()
  return <>
      <h4>Total de compra:</h4>
      <h2>
        S/{Number(carrito.total).toFixed(2)}
      </h2>
      <h4>Unidades: {carrito.length}</h4>
      <button className='btn btn-warning'>Terminar Compra</button>
  </>;
}
