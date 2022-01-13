import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import Products from '../mock/products.json'
import Loading from './Loading';

const getProductById = async (id) => {
    const productPromise = new Promise( (resolve, reject) => {
        setTimeout(() => {
            const product = Products.find( item => item.id === id);
            resolve(product);
        }, 2000)
    });

    const data = await productPromise;

    return data;
}


export default function ItemDetailContainer() {
    
    const [item, setItem] = useState();

    useEffect(() => {
        getProductById(8)
            .then( product => setItem(product) )
    }, [])

    return (
        <div className='container'>
            {item ? <ItemDetail product={item}/>: <Loading/>}
        </div>
    )
}
