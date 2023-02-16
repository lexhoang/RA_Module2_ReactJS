import React from 'react'

export default function CartFooter(props) {
    const { listCartLength } = props
    const getTotal = JSON.parse(localStorage.getItem("totalBill"));
    console.log(getTotal);
    return (
        <tr>
            <td colSpan={4}>
                There are <b>{listCartLength}</b> items in your shopping cart.
            </td>
            <td colSpan={2} className="total-price text-left">
                {getTotal} USD
            </td>
        </tr>
    )
}
