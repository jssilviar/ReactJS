import React from 'react'
import {productImages} from '../helpers/productImages'

export default function ItemDetail({product}) {

    return (
        <div className='row'>
            <img className="img-rounded col-4" src={productImages(`./${product.id}.png`).default} alt={product.nombre}/>
            <div className='col-8'>
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
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                    <label class="form-check-label" for="flexRadioDefault1">
                        Recojo
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                    <label class="form-check-label" for="flexRadioDefault2">
                        Delivery
                    </label>
                </div>
            </div>
        </div>
    )
}
