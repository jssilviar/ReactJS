import { useEffect, useState} from 'react'
import { ItemList} from './ItemList'
import Products from '../mock/products.json'
import Loading from './Loading';

const getCakes = async (category) => {
    const productCakePromise = new Promise ((resolve, reject) => {
        setTimeout(() =>{
            const cakes = Products.filter( item => item.categoria === category);
            resolve(cakes)
        }, 1000)
    });

    const data = await productCakePromise;
    return data;
}

export function ItemListContainer ({category}){
    const [productCake, setProducts] = useState([])

    useEffect( () => {
        getCakes(category).then(cakes =>setProducts(cakes))
    }, [category] )

    return(
        <div className="container">
            {productCake ? <ItemList cakes={productCake}/> : <Loading/>}
        </div>
    )
}
