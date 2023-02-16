import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { act_buy } from '../../actions';

export default function ProductComp(props) {
    const { product } = props;
    const [quantity, setQuantity] = useState(1);

    const dispatch = useDispatch();
    const handleBuyProduct = () => {
        dispatch(act_buy(product, quantity))
    }
    return (
        <div>
            {/* PRODUCT : START */}
            <div className="media product">
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
                    <input
                        name="quantity-product-1"
                        type="number"
                        min={1}
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                    />
                    {
                        product.quantity > 0 ?
                            <a data-product={1} href="#" className="price"
                                onClick={() => handleBuyProduct()}>
                                {" "}
                                {product.price} USD{" "}
                            </a>
                            :
                            <span className="price">
                                {" "}
                                {product.price} USD{" "}
                            </span>
                    }

                </div>
            </div>
            {/* PRODUCT : END */}
        </div>
    )
}
