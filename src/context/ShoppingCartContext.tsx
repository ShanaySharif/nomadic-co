import { createContext,ReactNode, useContext } from "react"

type ShoppingCartProviderProps = {
    children: ReactNode // type given to the children property insdie of react
}
const ShoppingCartContext = createContext({}) //pass in empty obj

export function useShoppingCart() {
    return useContext(ShoppingCartContext)
}
//p=provider/ value I'll need plus code for redering shoppoing cart
//provider needs to have obj & children




export function ShoppingCartProvider({ children }:
 ShoppingCartProviderProps) {
    return (
        <ShoppingCartContext.Provider value ={{}}>
            {children}
        </ShoppingCartContext.Provider>


    )
 }
 



//code for redering out shopping cart 