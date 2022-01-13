import { useEffect, useState} from 'react'
import { ItemList} from './ItemList'
import Products from '../mock/products.json'
import Loading from './Loading';


const getCakes = async () => {
    const productCakePromise = new Promise ((resolve, reject) => {
        setTimeout(() =>{
            const cakes = Products;
            resolve(cakes)
        }, 2000)
    });

    const data = await productCakePromise;
    return data;
}

export function ItemListContainer (){
    const [productCake, setProducts] = useState([])

    useEffect( () => {
        getCakes().then(cakes =>setProducts(cakes))
    }, [] )

    return(
        <div className="container">
            {productCake ? <ItemList cakes={productCake}/> : <Loading/>}
        </div>
    )
}
