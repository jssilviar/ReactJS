import { Link } from 'react-router-dom';
import {Item} from './Item';
import Loading from './Loading';

export function ItemList({cakes}){
    if (cakes.length === 0) {
        return <Loading/>  
    } else {
        return(
            <div className='gallery'>
                {cakes.map(itemCakes => {
                    return (
                        <Link key={itemCakes.id} to={`/product/${itemCakes.id}`}>
                            <Item productCake={itemCakes}/>
                        </Link>
                    )
                })}
            </div>
        )
    }
}