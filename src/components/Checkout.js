import React from 'react';
import { useCart } from '../hooks/userCart';
import { useForm } from 'react-hook-form';
import { createOrder } from '../firebase';
import { AlertError, AlertOK } from '../alerts/Alerts';

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
            const orderId = await createOrder(newOrderData);
            AlertOK(newOrderData.buyer.name, orderId);
            reset();
            carrito.clear();
        } catch (error) {
            AlertError(error);
        }
    }

  return <>
      <h4>Total de compra:</h4>
      <h2>
        S/{Number(carrito.total).toFixed(2)}
      </h2>
      <h4>Unidades: {carrito.length}</h4>
      <form onSubmit={ handleSubmit(sendForm) }>
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">Nombre</label>
          <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Juan" required { ...register("name")} minLength="4"/>
        </div>
        <div className="mb-3">
          <label for="exampleFormControlInput2" className="form-label">Correo</label>
          <input type="email" className="form-control" id="exampleFormControlInput2" placeholder="juan@gmail.com" required { ...register("email")}/>
        </div>
        <div className="mb-3">
          <label for="exampleFormControlInput3" className="form-label">Teléfono</label>
          <input type="tel" className="form-control" id="exampleFormControlInput3" placeholder="987654321" required { ...register("phone")} minLength="7" maxLength={9} pattern="[0-9]{9}" title='Ingresa entre 7 a 9 dígitos'/>
        </div>
        <button className='btn btn-warning' >Terminar Compra</button>
      </form>
  </>;
}
