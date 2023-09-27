import { Offcanvas } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
// off canvas gives the slid effect to the cart bar


type ShoppingCartProps = {
    isOpen: boolean
}


export function ShoppingCart({isOpen}): ShoppingCartProps){
    const { closeCart } = useShoppingCart ()

    return (
        <Offcanvas show={isOpen} onHide={closeCart} placement="end">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Cart</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Stack gap={3}>
              {cartItems.map(item => (
                <CartItem key={item.id} {...item} />
              ))}
              <div className="ms-auto fw-bold fs-5">
                Total{" "}
                {formatCurrency(
                  cartItems.reduce((total, cartItem) => {
                    const item = coffeeItems.find(i => i.id === cartItem.id)
                    return total + (item?.price || 0) * cartItem.quantity
                  }, 0)
                )}
              </div>
            </Stack>
          </Offcanvas.Body>
        </Offcanvas>
      )
    }