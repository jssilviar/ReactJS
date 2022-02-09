import React from 'react';
import { useCart } from '../hooks/userCart';
import Swal from 'sweetalert2'
import { useForm } from 'react-hook-form';
import { createOrder } from '../firebase';

function alertOK(client) {
  Swal.fire({
    title: `Gracias, ${client}`,
    text: 'Tu compra fue exitosa',
    icon: 'success',
    width: 600,
    padding: '1em',
    color: ' #bdb76b',
    background: 'white',
  })
}

function alertError() {
  Swal.fire({
    title: 'Error',
    icon: 'error',
    width: 600,
    padding: '1em',
    color: ' #bdb76b',
    background: 'white',
  })
}

export default function Checkout({items}) {

    const { handleSubmit, register, reset} = useForm();
    
    const carrito = useCart();

    async function sendForm(formValues) {
        try {
            const newOrderData = {
                buyer: formValues,
                items: carrito.items,
                total: carrito.total.toFixed(2),
            }
            await createOrder(newOrderData);
            alertOK(newOrderData.buyer.name);
            reset();
            carrito.clear();
        } catch (error) {
            alertError();
        }
    }

  return <>
      <h4>Total de compra:</h4>
      <h2>
        S/{Number(carrito.total).toFixed(2)}
      </h2>
      <h4>Unidades: {carrito.length}</h4>
      <form onSubmit={ handleSubmit(sendForm) }>
        <div class="mb-3">
          <label for="exampleFormControlInput1" className="form-label">Nombre</label>
          <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Juan" required { ...register("name")}/>
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput2" className="form-label">Correo</label>
          <input type="email" className="form-control" id="exampleFormControlInput2" placeholder="juan@gmail.com" required { ...register("email")}/>
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput3" className="form-label">Teléfono</label>
          <input type="tel" className="form-control" id="exampleFormControlInput3" placeholder="945287003" required { ...register("phone")}/>
        </div>
        <button className='btn btn-warning' >Terminar Compra</button>
      </form>
  </>;
}
