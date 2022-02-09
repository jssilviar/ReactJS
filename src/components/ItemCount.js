import {useState} from 'react'
import Swal from 'sweetalert2'

//las props se reciben como propiedades de un objeto {}, asi pueden pasarse dentro del hook 'useState'
export function ItemCount({stock, initial = 1, onAdd}){

    const [count, setCount] = useState(initial);

    const validarStock =() => {
        return stock >= count
    }

    const maxStock =() => {
        return stock > count
    }
    
    function minStock () {
        return count >= 2;
    }

    function handlePrevCount() {
        setCount(prevCount => prevCount - 1)
    }

    function handleAdding() {
        setCount(prevCount => prevCount + 1)
    }
    function sweetAlert() {
        onAdd(count)
        Swal.fire({
            position: 'center',
            icon: 'success',
            showConfirmButton: false,
            title: 'Muy bien',
            text: 'Se añadió el producto a tu bolsa.',
            timer: 2000
            })
    }

    return (
        <>
            <div className='mb-4'>
                <button className="rounded px-4 py-2" onClick={handlePrevCount} disabled={!minStock()}> - </button>
                <span className="px-4 text-2xl">{count}</span>
                <button className="rounded px-4 py-2" onClick={handleAdding} disabled={!maxStock()}> + </button>
            </div>
            <button className="btn btn-warning" onClick={sweetAlert} disabled={!validarStock()}
            > Añadir al carrito </button>
        </>
    )

}


