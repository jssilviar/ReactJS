import { useParams } from 'react-router-dom'
import ItemDetailContainer from './ItemDetailContainer.js'

export default function ProductDetailPage() {

    const {id} = useParams();

    return <ItemDetailContainer productId={id}/>
}
