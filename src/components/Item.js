import logoText from '../logoText.png';
import { ItemCount } from './ItemCount';

export function Item ({ productCake }){
    return(
    <div className='card'>
        <img src={logoText} className="item" alt="item" />
        <p>Nombre del producto: {productCake.name}</p>
        <p>Stock del producto: {productCake.stock}</p>
        <p>Descripción:{productCake.description}</p>
        <ItemCount stock={productCake.stock} initial={1}/>
    </div>
    )
}