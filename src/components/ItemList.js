import {Item} from './Item'
import Pacman from '../pacman_loading.svg'

export function ItemList({cakes}){
    if (cakes.length === 0) {
        return (
            <>
                <img className='' src={Pacman} alt='Pacman'/>
                Cargando
            </>
        )  
    } else {
        return(
            <div className='cards container' >
                {cakes.map(itemCakes => {
                    return <Item key={itemCakes.id} productCake={itemCakes} />
                })}
            </div>
        )
    }
}