import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { act_buy } from '../../actions/index.js';

export default function Product() {
    const listProduct = useSelector(state => state.listProductReducer);
    // console.log(listProduct);
    const [quantity, setQuantity] = useState(1);

    const dispatch = useDispatch();
    const handleBuyProduct = (product) => {
        dispatch(act_buy(product, quantity))
    }


    return (
        listProduct.map((product, index) => {
            // console.log(product.image);
            return (
                <div className="media product" key={product.productId}>
                    <div className="media-left">
                        <a href="#">
                            <img
                                className="media-object"
                                src={product.image}
                                alt="pizza"
                            />
                        </a>
                    </div>
                    <div className="media-body">
                        <h4 className="media-heading">{product.productName}</h4>
                        <p>
                            {product.title}
                        </p>
                        {
                            product.quantity > 0 ?
                                <>
                                    <input
                                        name="quantity-product-1"
                                        type="number"
                                        min={1}
                                        value={quantity}
                                        onChange={(e) => setQuantity(e.target.value)}
                                    />
                                    <a data-product={1} href="#" className="price"
                                        onClick={() => handleBuyProduct(product)}
                                    >
                                        {product.price + " USD"}
                                    </a>
                                </>
                                :
                                <>

                                    <span data-product={1} href="#" className="price">
                                        {product.price + " USD"}
                                    </span>
                                </>
                        }

                    </div>
                </div>
            )
        })
    )
}
