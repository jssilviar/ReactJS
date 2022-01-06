import { useEffect, useState} from 'react'
import { ItemList} from './ItemList'


const productCakePromise = new Promise ((resolve, reject) => {
    setTimeout(() =>{
        const cakes = [{
            id: '01',
            name: 'Keke de Graduación',
            description: 'keke de 3 niveles vainilla, chocolate, chocochip',
            stock: 10
        },{
            id: '02',
            name: 'Keke de Baby Shower',
            description: 'keke marmoleado forrado de fondant, aprox 30 porciones.',
            stock: 10
        }]

        resolve(cakes)
    }, 2000)
})

productCakePromise.then(productCake => {
    console.log(productCake)
})

export function ItemListContainer (){
    const [productCake, setProducts] = useState([])

    useEffect( () => {
        productCakePromise.then(productCake =>{
            setProducts(productCake)
        })
    }, [] )

    return <ItemList cakes={productCake} />

    // return <ItemCount stock={15} initial={1}/>
}
