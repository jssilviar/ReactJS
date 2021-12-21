import carrito from '../carrito.svg';

export function CartWidget (props){
    const { numItems } = props
    return (
        <div>
            <img src={carrito} className="carrito" alt="carrito" />
            <span> {numItems} </span>
        </div>
    )
} 
