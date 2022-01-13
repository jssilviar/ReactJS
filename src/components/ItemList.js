import {Item} from './Item'
import Loading from './Loading'

export function ItemList({cakes}){
    if (cakes.length === 0) {
        return <Loading/>  
    } else {
        return(
            <div className='gallery'>
                {cakes.map(itemCakes => {
                    return <Item key={itemCakes.id} productCake={itemCakes} />
                })}
            </div>
        )
    }
}