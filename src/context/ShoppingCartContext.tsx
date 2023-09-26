import { createContext, useContext } from "react"

const ShoppingCartContext = createContext({}) //pass in empty obj

export function useShoppingCart() {
    return useContext(ShoppingCartContext)
}
//p=provider/ value I'll need plus code for redering shoppoing cart
//provider needs to have obj & children
type ShoppingCartProviderProps
export function ShopingCartProvider({children}) {
    return (
        <ShoppingCaertContext.Provider value={{}}>
        </ShoppingCartContext.Provider>
    )   
}


//code for redering out shopping cart 