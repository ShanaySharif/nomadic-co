import { createContext, ReactNode, useContext, useState 
 } from "react"

type ShoppingCartProviderProps = {
    children: ReactNode // type given to the children property insdie of react   
}
type CartItem = {
    id: number
    name: string
    quantity: number
}


type ShoppingCartContext = {
    getItemQuantity: (id: number) => number
    increaseQuantity: (id: number) => void //will return nothing
    decreaseQuantity: (id: number) => void
    removeFromCart: (id: number) => void
}
const ShoppingCartContext = createContext({} as ShoppingCartContext) //pass in empty obj


export function useShoppingCart() {
    return useContext(ShoppingCartContext)
}


export function ShoppingCartProvider({ children }:
    ShoppingCartProviderProps) {
    const [cartItems, setCartItems] = useState<CartItem[]>([])


    function increaseCartQuantity(id: number) {
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


      function decreaseCartQuantity(id: number) {
        setCartItems(currItems => {
          if (currItems.find(item => item.id === id)?.quantity === 1) {
            return currItems.filter(item => item.id !== id)
          } else {
            return currItems.map(item => {
              if (item.id === id) {
                return { ...item, quantity: item.quantity - 1 }
              } else {
                return item
              }
            })
          }
        })
      }

      function removeFromCart(id: number) {
        setCartItems(currItems => {
          return currItems.filter(item => item.id !== id)
        })
      }

    return (
        <ShoppingCartContext.Provider value={{getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart}}>
            {children}
        </ShoppingCartContext.Provider>


    )
}

//code for redering out shopping cart 