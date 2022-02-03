import React, { useEffect, useState } from 'react'
import { getProductById } from '../firebase';
import ItemDetail from './ItemDetail'
import Loading from './Loading';

export default function ItemDetailContainer({productId}) {    
    const [product, setProduct] = useState();

    useEffect(() => {
        async function fn() {
            try {
                const product = await getProductById(productId);
                setProduct(product);
            } catch (error) {
                console.error(error)
            }
        }

        fn()

    }, [productId])

    return (
        <div className='container'>
            {product ? <ItemDetail product={product}/>: <Loading/>}
        </div>
    )
}
