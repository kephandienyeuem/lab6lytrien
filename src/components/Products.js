// src/components/Products.js
import React from 'react';
import prd1 from '../assets/imgs/sanpham1.jpg';
import prd2 from '../assets/imgs/sanpham2.jpg';
import prd3 from '../assets/imgs/sanpham3.jpg';
import { useCart } from '../contexts/CartContext';

export default function Products() {
    const { addToCart } = useCart();

    const products = [{
            id: 1,
            prdName: 'Đồng hồ Orient Small',
            price: 5490000,
            prdImage: prd1,
            description: 'Đồng hồ Orient Small Bambino 38.4 mm Nam RA-AP0104S30B thuộc thương hiệu Orient của Nhật Bản.',
        },
        {
            id: 2,
            prdName: 'Đồng hồ Orient Mako Solar 42.8 mm Nam RA-TX0201L10B',
            price: 7049000,
            prdImage: prd2,
            description: 'Đồng hồ Orient Mako Solar 42.8 mm Nam RA-TX0201L10B thuộc thương hiệu Orient của Nhật Bản.',
        },
        {
            id: 3,
            prdName: 'Đồng hồ Citizen 42 mm Nam NH8400-87L',
            price: 6813000,
            prdImage: prd3,
            description: 'Đồng hồ Citizen 42 mm Nam NH8400-87L thuộc thương hiệu Citizen của Nhật Bản.',
        },
    ];

    return ( <
        div className = 'container mx-auto p-6' >
        <
        h2 className = 'text-2xl font-bold' > Danh sách đồng hồ < /h2> <
        div className = 'grid grid-cols-3 gap-4' > {
            products.map((product) => ( <
                div key = { product.id }
                className = 'product-card' >
                <
                img src = { product.prdImage }
                alt = { product.prdName }
                className = 'product-image' / >
                <
                h3 className = 'product-name' > { product.prdName } < /h3> <
                p > { product.description } < /p> <
                p className = 'product-price' > { product.price }
                VND < /p> <
                button onClick = {
                    () => addToCart(product) }
                className = 'button-add-to-cart' >
                Thêm vào giỏ hàng <
                /button> <
                /div>
            ))
        } <
        /div> <
        /div>
    );
}