import {Item} from './Item'

export function ItemList({cakes}){
    return(
        <div className='cards container' >
            {cakes.map(itemCakes => {
                return <Item key={itemCakes.id} productCake={itemCakes} />
            })}
        </div>
    )
}