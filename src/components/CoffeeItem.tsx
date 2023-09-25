// import React from 'react';

import { Card } from "react-bootstrap"


//defining type
type CoffeeItemProps = {
    id: number
    name: string
    price: number
    imgURL: string
}

export function CoffeeItem({ id, name, price, imgURL }: CoffeeItemProps) {
    return (
        <Card>
            <Card.Img
                variant="top"
                src={imgURL}
                height="200px"
                style={{ objectFit: "cover" }}
            />
            <Card.Body className="d-flex flex-column">
                <Card.Title className="d-flex justify-content-space-between align-items-baseline mb-4">
                    <span className="fs-2">{ name }</span>
                    <span className="ms-2">{price}</span>
                    <span className="fs-2">{id}</span>
                    <span className="ms-2">{price}</span>
                    <span className="ms-2">{price}</span>




                    


                </Card.Title>

            </Card.Body>

        </Card>
    )
}