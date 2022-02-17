export function CartWidget ({numItems}){

    return (
        <div>
            <img src="/carrito.svg" className="carrito" alt="carrito" />
            <span> {numItems} </span>
        </div>
    )
} 
