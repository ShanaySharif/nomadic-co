import { Offcanvas } from "react-bootstrap";
// off canvas gives the slid effect to the cart bar

const { closeCart } = useShoppingCart ()

export function ShoppingCart() {
    return <Offcanvas show={true} onHide={closeCart} placement= "end">
        <Offcanvas.Header closeButton>
            <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
    </Offcanvas>


}