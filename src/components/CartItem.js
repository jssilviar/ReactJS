import React from 'react';
import { productImages } from '../helpers/productImages';
import { useCart } from '../hooks/userCart';

export default function CartItem({item}) {

  const carrito = useCart()

  return (
    <>
      <div className='row'>
          <div className='col-sm-4'>
            <img src={productImages(`./${item.id}.png`).default} alt="imagen"/>
          </div>  
          <div className='col-sm-8'>
            <h5>{item.nombre}</h5>
            <h6>S/{Number(item.precio).toFixed(2)}</h6>
            <h6>{item.count} unidad(es)</h6>
            <h5>S/{Number(item.count * item.precio).toFixed(2)}</h5>
          </div> 
      </div>
      <button className="btn btn-warning" onClick={ () => { carrito.removeItem(item.id)}}>Eliminar</button>
    </>
  );
}

