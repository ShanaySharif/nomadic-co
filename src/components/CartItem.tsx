import { useShoppingCart } from "../context/ShoppingCartContext"
import coffeeItems from "../data/items.json"

type CartItemProps = {
    id: number
    quantity: number

}
export function CartItem ({ id, quantity }: CartItemProps) {

    const { removeFromCart } = useShoppingCart ()
    const item = coffeeItems
    if ( item == null ) return null

    return (
    <Stack direction = "horizontal" gap={2}
    
    )
}