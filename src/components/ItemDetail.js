import { useCart } from '../hooks/userCart';
import { ItemCount } from './ItemCount';

export default function ItemDetail({product}) {

    const carrito = useCart();

    const carItem = carrito.getItem(product.id);

    function onAdd (count) {
        return carrito.addItem({...product, count})
    }

    return (
        <div className='row'>
            <img className="img-rounded col-sm-4" src={product.imagen} alt={product.nombre}/>
            <div className='col-sm-8'>
                <h1>{product.nombre}</h1>
                <h3 className='caracteristica'>Características</h3>
                <h4>Modelo:</h4>
                <p>{product.modelo}</p>
                <h4>Descripción:</h4>
                <p>{product.desc}</p>
                {   product.precio &&
                    <>
                        <h4>Precio:</h4>
                        <h4>S/{product.precio.toFixed(2)}</h4>
                    </>
                }
                { product.stock === 1 ? <h3>Sin Stock</h3> : <ItemCount
                    onAdd={onAdd}
                    initial={carItem?.count}
                    stock={product.stock}
                />}
                
            </div>
        </div>
    )

}
