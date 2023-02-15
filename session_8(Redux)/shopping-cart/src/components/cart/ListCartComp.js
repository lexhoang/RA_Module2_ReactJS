import React from 'react'
import { useSelector } from 'react-redux';
import CartBody from './CartBody';
import CartFooter from './CartFooter';
import Notify from './Notify';

export default function ListCartComp() {
    const listCart = useSelector(state => state.listCartReducer);

    let elementCartBody = listCart.map((cart, index) => {
        return <CartBody key={cart.product.productId} cart={cart} stt={index}></CartBody>
    })

    return (
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
                                <th>Product Name</th>
                                <th width="15%">Price</th>
                                <th width="4%">Quantity</th>
                                <th width="20%">Subtotal</th>
                                <th width="25%">Action</th>
                            </tr>
                        </thead>
                        <tbody id="my-cart-body">
                            {/* CART BODY */}
                            {elementCartBody}
                        </tbody>
                        <tfoot id="my-cart-footer">
                            {/* CART FOOTER */}
                            <tr>
                                <th colSpan={6}>Empty product in your cart</th>
                            </tr>
                            <CartFooter />
                        </tfoot>
                    </table>
                </div>
            </div>
            <Notify />
        </div>
    )
}
