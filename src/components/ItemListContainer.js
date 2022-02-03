import { useEffect, useState} from 'react'
import { ItemList} from './ItemList'
import Loading from './Loading';
import { getAllProducts, getProductByCategoria } from '../firebase';

function getProducts(category) {
    const categoria = category?.category;
    if(categoria){
        return getProductByCategoria(categoria);
    } else {
        return getAllProducts();
    }
}

export function ItemListContainer ({category}){
    const [productCake, setProducts] = useState([]);

    useEffect(() => {
        async function fn() {
            try {
                const productos = await getProducts(category);
                setProducts(productos)
            } catch (error) {
                console.error(error);
            }
        }
        fn();
    }, [category]);
    
    return <div className='container'>
        {productCake ? <ItemList cakes={productCake} /> : <Loading/> }
    </div>
}
