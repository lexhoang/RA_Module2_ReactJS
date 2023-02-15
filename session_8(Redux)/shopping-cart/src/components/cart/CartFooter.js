import React from 'react'
import { useSelector } from 'react-redux'

export default function CartFooter() {
    const listCart = useSelector(state => state.listCartReducer);
    //Coi như tổng tiền đã được lưu trữ trong localStorage với tên totalAmount
    let totalAmount = localStorage.getItem('totalAmount')

    return (
        listCart.length > 0 ?
            <tr>
                <td colSpan={4}>
                    There are <b>{listCart.length}</b> items in your shopping cart.
                </td>
                <td colSpan={2} className="total-price text-left">
                    {totalAmount} USD
                </td>
            </tr>
            :
            ""
    )
}
