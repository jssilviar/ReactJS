import React from 'react';
import { useCart } from '../hooks/userCart';
import Swal from 'sweetalert2'

export default function Checkout({items}) {

  function sweetAlert() {
    Swal.fire({
      title: 'Tu compra está siendo procesada.',
      width: 600,
      padding: '1em',
      color: ' #bdb76b',
      background: 'white',
      
    })
    }

  const carrito = useCart()
  return <>
      <h4>Total de compra:</h4>
      <h2>
        S/{Number(carrito.total).toFixed(2)}
      </h2>
      <h4>Unidades: {carrito.length}</h4>
      <button className='btn btn-warning' onClick={sweetAlert}>Terminar Compra</button>
  </>;
}
