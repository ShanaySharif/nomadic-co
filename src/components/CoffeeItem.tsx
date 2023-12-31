
import { Button, Card, Container } from "react-bootstrap";
import { formatCurrency } from "../utilities/formatCurrency";
import { useShoppingCart } from "../context/ShoppingCartContext";

const burlywoodButtonStyle = {
  backgroundColor: 'burlywood',
  color: 'white', 
  transition: 'background-color 0.3s ease', 
};

// Defining type
type CoffeeItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

export function CoffeeItem({ id, name, price, imgUrl }: CoffeeItemProps) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();
  const quantity = getItemQuantity(id); // quantity set

  return (
    <Container className="my-4">
      {/* Apply margin to the container */}
      <Card className="h-190">

        <Card.Img
          variant="top"
          src={imgUrl}
          height="300px"
          style={{ objectFit: "cover" }}
        />
        <Card.Body className="d-flex flex-column">
          <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
            <span className="fs-2">{name}</span>
            <span className="ms-2 text-muted">{formatCurrency(price)}</span>
          </Card.Title>
          <div className="mt-auto">
            {quantity === 0 ? (
              <Button
                className="w-100"
                style={burlywoodButtonStyle}
                onClick={() => increaseCartQuantity(id)}
              >
                + Add To Cart
              </Button>
            ) : (
              <div
                className="d-flex align-items-center flex-column"
                style={{ gap: ".5rem" }}
              >
                <div
                  className="d-flex align-items-center justify-content-center"
                  style={{ gap: ".5rem" }}
                >
                  <Button
                    style={burlywoodButtonStyle}
                    onClick={() => decreaseCartQuantity(id)}
                  >
                    -
                  </Button>
                  <div>
                    <span className="fs-3">{quantity}</span> in cart
                  </div>
                  <Button
                    style={burlywoodButtonStyle}
                    onClick={() => increaseCartQuantity(id)}
                  >
                    +
                  </Button>
                </div>
                <Button
                  onClick={() => removeFromCart(id)}
                  variant="danger"
                  size="sm"
                  style={burlywoodButtonStyle} // Apply the style to the Remove button as well
                >
                  Remove
                </Button>
              </div>
            )}
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
}