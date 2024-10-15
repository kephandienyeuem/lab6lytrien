// src/components/Cart.js
import React from 'react';
import { useCart } from '../contexts/CartContext';

const Cart = () => {
    const { cart, removeFromCart } = useCart();

    return ( <
        div className = "cart-container container mx-auto p-6" >
        <
        h2 className = "text-2xl font-bold" > Giỏ hàng của bạn < /h2> {
            cart.length === 0 ? ( <
                p > Giỏ hàng trống < /p>
            ) : ( <
                ul > {
                    cart.map((item) => ( <
                        li key = { item.id }
                        className = "cart-item" >
                        <
                        span > { item.prdName } < /span> <
                        button onClick = {
                            () => removeFromCart(item.id) }
                        className = "text-red-500" >
                        Xóa <
                        /button> <
                        /li>
                    ))
                } <
                /ul>
            )
        } <
        /div>
    );
};

export default Cart;