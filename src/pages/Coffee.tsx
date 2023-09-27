
import {Col, Row} from "react-bootstrap"
import {CoffeeItem} from "../components/CoffeeItem"
import coffeeItems from "../data/items.json"

export function Coffee() {
    return (
        <>
        <h1>Menu</h1>
        <Row md={2} xs={1} lg={3} className="g-3">

            {coffeeItems.map(item => (
                <Col key ={item.id}>
                <CoffeeItem {...item} />
                </Col>  
            ))}
        </Row>
        </>
    
    )
}




