import React from 'react'
import { useSelector } from 'react-redux';
import CartBody from './CartBody';
import CartFooter from './CartFooter';


export default function ListCartComp() {
    const listCart = useSelector(state => state.listCartReducer);
    const notify = useSelector(state => state.notifyReducer);

    return (
        <div>
            {/* CART : START */}
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                <div className="panel panel-danger">
                    <div className="panel-heading">
                        <h1 className="panel-title">Your Cart</h1>
                    </div>
                    <div className="panel-body">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th width="4%">#</th>
                                    <th>productName</th>
                                    <th width="15%">Price</th>
                                    <th width="4%">Quantity</th>
                                    <th width="20%">Subtotal</th>
                                    <th width="25%">Action</th>
                                </tr>
                            </thead>
                            <tbody id="my-cart-body">
                                {/* CART BODY */}
                                {
                                    listCart.map((cartItem, index) => {
                                        return (
                                            <CartBody key={cartItem.product.productId} cartItem={cartItem} stt={index} />
                                        )
                                    })
                                }
                            </tbody>
                            <tfoot id="my-cart-footer">
                                {/* CART FOOTER */}
                                <tr>
                                    <th colSpan={6}>Empty product in your cart</th>
                                </tr>
                                <CartFooter listCartLength={listCart.length} />
                            </tfoot>
                        </table>
                    </div>
                </div>

                <div className={`alert alert-${notify.class}`} role="alert" id="mnotification">
                    {notify.message}
                </div>
            </div>
            {/* CART : END */}
        </div>
    )
}
