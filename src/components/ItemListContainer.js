import { ItemCount} from './ItemCount'

export function ItemListContainer (){

    //Las props es mejor pasarlas dentro de llaves, porque si no se toman por strings dentro del componente
    return <ItemCount stock={15} initial={1}/>
}