import { createContext, ReactNode, useContext } from "react"

type ShoppingCartProviderProps = {
    children: ReactNode // type given to the children property insdie of react   
}
type CarItem = {
    id: number
    name: string
    quantity: number
}

type ShoppingCartContext = {
    getItemQuantity: (id: number) => number
    increaseQuantity: (id: number) => void //will return nothing
    decreaseQuantity: (id: number) => void
    removeFromQuantity: (id: number) => void
}
const ShoppingCartContext = createContext({}) //pass in empty obj


export function useShoppingCart() {
    return useContext(ShoppingCartContext)
}
//p=provider/ value I'll need plus code for redering shoppoing cart
//provider needs to have obj & children

export function ShoppingCartProvider({ children }:
    ShoppingCartProviderProps) {
    const [cartItems, setCartItems] = userState > CartItem[] > ([])


    function getItemQuantity(id: number) {
        setCartItems(currItems => {
            if (currItems.find(item => item.id === id) == null) {
                return [...currItems, { id, quantity: 1 }]
            } else {
                return currItems.map(item => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity + 1 }
                    } else {
                        return item
                    }

                })
            }

        })
    }


    function increaseCartQuantity(id: number)


    return (
        <ShoppingCartContext.Provider value={{}}>
            {children}
        </ShoppingCartContext.Provider>


    )
}

//code for redering out shopping cart 