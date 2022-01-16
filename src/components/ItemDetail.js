import React from 'react'
import { Link } from 'react-router-dom'
import {productImages} from '../helpers/productImages'
import { ItemCount } from './ItemCount'

export default function ItemDetail({product}) {

    return (
        <div className='row'>
            <img className="img-rounded col-sm-4" src={productImages(`./${product.id}.png`).default} alt={product.nombre}/>
            <div className='col-sm-8'>
                <h1>{product.nombre}</h1>
                <h3 className='caracteristica'>Características:</h3>
                <h4>Modelo:</h4>
                <p>{product.modelo}</p>
                <h4>Descripción:</h4>
                <p>{product.desc}</p>
                <h4>Uso:</h4>
                <p>Para cummpleaños</p>
                <h4># de torta:</h4>
                <select>
                    <option>18</option>
                    <option>20</option>
                    <option>22</option>
                    <option>24</option>
                </select>
                <h4>Opciones</h4>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                    <label className="form-check-label" >
                        Recojo
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" defaultChecked />
                    <label className="form-check-label" >
                        Delivery
                    </label>
                </div>
                <h4>Opciones de pago</h4>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                    <label className="form-check-label" >
                        Efectivo
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" defaultChecked />
                    <label className="form-check-label" >
                        Tarjetas crédito/débito
                    </label>
                </div>
                <ItemCount stock={product.stock} initial={1}/>
                <Link to="/cart">
                    <button className="btn btn-warning">Terminar Compra</button>
                </Link>
            </div>
        </div>
    )
}
