import {useState} from 'react'

export function ItemCount( stock , initial , onAdd){
    const [count, setCount] = useState(1);

    const resultadoBoton = () => {
        alert(`Stock: ${stock}
                Count: ${count}
                validarStock()`)
    }

    // const validarStock =() => {
    //     return stock >= count
    // }

    return (
        <div className="flex">
            <button className="rounded px-4 py-2" onClick={()=>{
                setCount((prevCount) =>{
                    return prevCount -1
                })
            }}
            > - </button>
            <span className="px-4 text-2xl">{count}</span>
            <button className="rounded px-4 py-2" onClick={()=>{
                setCount((prevCount) =>{
                    return prevCount +1
                })
            }}> + </button>
            <button className="bg-yellow-400" onClick={resultadoBoton}
            >Agregar al carrito</button>
        </div>
    )

}


