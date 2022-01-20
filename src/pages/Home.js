import React from 'react'
import { useParams } from 'react-router-dom'
import { ItemListContainer } from '../components/ItemListContainer'

export default function Home() {

    const {category} = useParams();
    
    return (
        <div>
            <ItemListContainer category={category}/>
        </div>
    )
}


