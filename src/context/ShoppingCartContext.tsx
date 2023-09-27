import {
  createContext, ReactNode, useContext, useState
} from "react"

type ShoppingCartProviderProps = {
  children: ReactNode // type given to the children property insdie of react   
}
type CartItem = {
  id: number
  // name: string
  quantity: number
}


type ShoppingCartContext = {
  openCart: () => void
  closeCart: () => void
  getItemQuantity: (id: number) => number
  increaseCartQuantity: (id: number) => void //will return nothing
  decreaseCartQuantity: (id: number) => void
  removeFromCart: (id: number) => void
  cartQuantity: number
  cartItems: CartItem[]
}
const ShoppingCartContext = createContext({} as ShoppingCartContext) //pass in empty obj


export function useShoppingCart() {
  return useContext(ShoppingCartContext)
}


export function ShoppingCartProvider({ children }:
  ShoppingCartProviderProps) {
    const [isOpen, setIsOpen] = useState(false)
    const [cartItems, setCartItems] = useState<CartItem[]>([])

  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity, 0
  )

  const openCart = () => setIsOpen(true)
  const closeCart = () => setIsOpen(false)



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
    <ShoppingCartContext.Provider
      value={{

        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        openCart, 
        closeCart,
        cartItems,
        cartQuantity,

      }}>
      {children}
    </ShoppingCartContext.Provider>


  )
}

//code for redering out shopping cart 