import {createContext} from "react"
import ItemDetail from "../components/ItemDetail";

export const CartContext = createContext({
    addItem: [ItemDetail, console.log(typeof"addToItem")] ,
});