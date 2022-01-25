import carrito from '../carrito.svg';

export function CartWidget ({numItems}){

    return (
        <div>
            <img src={carrito} className="carrito" alt="carrito" />
            <span> {numItems} </span>
        </div>
    )
} 
