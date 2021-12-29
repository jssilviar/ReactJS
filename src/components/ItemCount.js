import {useState} from 'react'

//las props se reciben como propiedades de un objeto {}, asi pueden pasarse dentro del hook 'useState'
export function ItemCount({stock , initial}){
    const [count, setCount] = useState(initial);

    const validarStock =() => {
        return stock >= count
    }

    const maxStock =() => {
        return stock > count
    }

    function onAdd () {
        alert(`¡Genial! Añadiste ${count} unidades a tu carrito.`)
    }
    
    function minStock () {
        return count >= 2;
    }

    return (
        <div className="flex">
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
            <button className="bg-warning" onClick={onAdd} disabled={!validarStock()}
            >Agregar al carrito</button>
        </div>
    )

}


