import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { act_delete } from '../../actions';
import { act_update } from '../../actions';

export default function CartBody(props) {
    const { cartItem, stt } = props;
    const [quantity, setQuantity] = useState();

    const dispatch = useDispatch();

    const handleEdit = () => {
        dispatch(act_update(cartItem.product, quantity))
    }

    const handleDelete = (IdProductDel) => {
        dispatch(act_delete(IdProductDel))
    }

    useEffect(() => {
        setQuantity(cartItem.quantity);
    }, [cartItem.quantity]);


    return (
        <tr>
            <th scope="row">{stt}</th>
            <td>{cartItem.product.productName}</td>
            <td>{cartItem.product.price} USD</td>
            <td>
                <input
                    name="cart-item-quantity-1"
                    type="number"
                    value={quantity}
                    min={1}
                    onChange={(e) => setQuantity(e.target.value)}
                />
            </td>
            <td>
                <strong>{cartItem.product.price * cartItem.quantity} USD</strong>
            </td>
            <td>
                <a
                    className="label label-info update-cart-item"
                    href="#"
                    data-product=""
                    onClick={() => handleEdit()}
                >
                    Update
                </a>
                <a
                    className="label label-danger delete-cart-item"
                    href="#"
                    data-product=""
                    onClick={() => handleDelete(cartItem.product.productId)}
                >
                    Delete
                </a>
            </td>
        </tr>
    )
}
