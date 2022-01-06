import logoText from '../logoText.png';

export function Item ({ productCake }){
    return(
    <div className='card'>
        <img src={logoText} className="App-logo" alt="logo" />
        <p>Nombre del producto: {productCake.name}</p>
        <p>Stock del producto: {productCake.stock}</p>
        <p>Id: {productCake.id}</p>
        <p>Descripción:{productCake.description}</p>
        <button className='botonComprar'>Añadir al carrito</button>
    </div>
    )
}