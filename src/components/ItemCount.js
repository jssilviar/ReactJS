import {useState} from 'react'

//las props se reciben como propiedades de un objeto {}, asi pueden pasarse dentro del hook 'useState'
export function ItemCount({stock, initial, onAdd}){

    const [count, setCount] = useState(initial);

    const validarStock =() => {
        return stock >= count
    }

    const maxStock =() => {
        return stock > count
    }

    /* function onAdd () {
        (count === 1)
            ? alert(`¡Genial! Añadiste ${count} unidad a tu carrito.`)
            : alert(`¡Genial! Añadiste ${count} unidades a tu carrito.`);
    } */
    
    function minStock () {
        return count >= 2;
    }

    return (
        <>
            <div>
                <button className="rounded px-4 py-2" onClick={()=>{
                    setCount((prevCount) =>{
                        return prevCount -1
                    })
                }}
                disabled={!minStock()}
                > - </button>
                <span className="px-4 text-2xl">{count}</span>
                <button className="rounded px-4 py-2" onClick={()=>{
                    setCount((prevCount) =>{
                        return prevCount +1
                    })
                }}
                disabled={!maxStock()}
                > + </button>
            </div>
            <button className="btn btn-warning" onClick={onAdd} disabled={!validarStock()}
            >Agregar al carrito</button>
        </>
    )

}


