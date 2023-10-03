import React from 'react';
import { Button } from 'react-bootstrap';
import { useShoppingCart } from '../context/ShoppingCartContext';
import 


export function Cart() {
    const { openCart, cartQuantity } = useShoppingCart();

    return (
        <Button
            onClick={openCart}
            style={{
                width: '3rem',
                height: '3rem',
                position: 'relative',
            }}
            variant="outline-primary"
            className="rounded-circle"
        >
            {/* ... (your cart icon code) */}
            {cartQuantity > 0 && (
                <div
                    className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
                    style={{
                        color: 'white',
                        width: '1.5rem',
                        height: '1.5rem',
                        position: 'absolute',
                        bottom: 0,
                        right: 0,
                        transform: 'translate(25%, 25%)',
                    }}
                >
                    {cartQuantity}
                </div>
            )}
        </Button>
    );
                }