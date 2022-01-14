import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import Products from '../mock/products.json'
import Loading from './Loading';

const getProductById = async (id) => {
    const productPromise = new Promise( (resolve, reject) => {
        setTimeout(() => {
            const product = Products.find( item => item.id === Number(id));
            resolve(product);
        }, 1000)
    });

    const data = await productPromise;
    return data;
}


export default function ItemDetailContainer({productId}) {
    
    const [product, setProduct] = useState();

    useEffect(() => {
        getProductById(productId)
            .then( product => setProduct(product) )
    }, [productId])

    return (
        <div className='container'>
            {product ? <ItemDetail product={product}/>: <Loading/>}
        </div>
    )
}
