import { useState } from "react";
import { CartContext } from "../contexts/cartContext";

export function CartProvider({children}) {
    
    const [itemsCarrito, setItemsCarrito] = useState([]);

    const contextValue = {
        items: itemsCarrito,
        get length() {
            return itemsCarrito.reduce((r, items) => r + items.count, 0);
        },
        getItem(id) {
            return itemsCarrito.find( i => i.id === id );
        },
        clear() {
            setItemsCarrito([])
        },
        removeItem(id){
            setItemsCarrito( currentItems => currentItems.filter( i => i.id !== id))
        },
        addItem(newItem) {
            setItemsCarrito( currentItems => {
                const itemsClonados = [...currentItems];
                const index = itemsClonados.findIndex( carItem => carItem.id === newItem.id)
                index === -1 ? itemsClonados.push(newItem) : itemsClonados[index] = newItem;
                return itemsClonados;

            })
        }
    }

    return <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
}