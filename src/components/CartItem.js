import React from 'react';
import { useCart } from '../hooks/userCart';
import Swal from 'sweetalert2';

export default function CartItem({item}) {

  const carrito = useCart()

  function sweetAlert() {
    Swal.fire({
      title: '¿Está segura(o) de eliminar el producto?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si!',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        carrito.removeItem(item.id)
        Swal.fire(
          'Borrado de su bolsa de compras',
        )
      }
    })
}

  return (
    <div className="m-2">
      <div className='row'>
          <div className='col-sm-3'>
            <img className="img-rounded item" src={item.imagen} alt="imagen"/>
          </div>  
          <div className='col-sm-7'>
            <h5>{item.nombre}</h5>
            <h6>S/{Number(item.precio).toFixed(2)}</h6>
            <h6>{item.count} unidad(es)</h6>
            <h5>Subtotal: S/{Number(item.count * item.precio).toFixed(2)}</h5>
          </div>
          <div className="col-sm-2">
            <button className="btn btn-warning" onClick={sweetAlert}>Eliminar</button>
          </div>
      </div>
    </div>
  );
}

