import React, { useState } from 'react'

export default function CartBody(props) {
    const { stt, cart } = props;
    const [quantity, setQuantity] = useState(1);
    let quantityBuy = (cart.quantity > 0) ? cart.quantity : quantity;
    return (
        <tr>
            <th scope="row">{stt + 1}</th>
            <td>{cart.product.productName}</td>
            <td>{cart.product.price} USD</td>
            <td>
                <input
                    name="cart-item-quantity-1"
                    type="number"
                    min={1}
                    value={quantityBuy}
                    onChange={(e) => setQuantity(e.target.value)}
                />
            </td>
            <td>
                <strong>{cart.product.price * cart.quantity} USD</strong>
            </td>
            <td>
                <button
                    className="label label-info update-cart-item"
                    data-product=""
                >
                    Update
                </button>
                <button
                    className="label label-danger delete-cart-item"
                    data-product=""
                >
                    Delete
                </button>
            </td>
        </tr>
    )
}
