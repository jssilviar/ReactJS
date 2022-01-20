import {createContext} from "react"

export const CartContext = createContext({
    cartItems: [],
    numero: 6,
    otra: "no se"
});