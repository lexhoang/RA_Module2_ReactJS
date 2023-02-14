import React from 'react'

export default function ListProductComp() {
    return (
        <div>
            {/* LIST PRODUCT : START */}
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h1 className="panel-title">List Products</h1>
                    </div>
                    <div className="panel-body" id="list-product">
                        {/* PRODUCT : START */}
                        <div className="media product">
                            <div className="media-left">
                                <a href="#">
                                    <img
                                        className="media-object"
                                        src="images/pizza.jpg"
                                        alt="pizza"
                                    />
                                </a>
                            </div>
                            <div className="media-body">
                                <h4 className="media-heading">Pizza</h4>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
                                    dicta asperiores veniam repellat unde debitis quisquam magnam
                                    magni ut deleniti!
                                </p>
                                <input
                                    name="quantity-product-1"
                                    type="number"
                                    defaultValue={1}
                                    min={1}
                                />
                                <a data-product={1} href="#" className="price">
                                    {" "}
                                    12 USD{" "}
                                </a>
                            </div>
                        </div>
                        {/* PRODUCT : END */}
                        {/* PRODUCT : START */}
                        <div className="media product">
                            <div className="media-left">
                                <a href="#">
                                    <img
                                        className="media-object"
                                        src="images/Hamburger.jpg"
                                        alt="hamburger"
                                    />
                                </a>
                            </div>
                            <div className="media-body">
                                <h4 className="media-heading">Hamburger</h4>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
                                    dicta asperiores veniam repellat unde debitis quisquam magnam
                                    magni ut deleniti!
                                </p>
                                <span className="price"> 12 USD</span>
                            </div>
                        </div>
                        {/* PRODUCT : END */}
                        {/* PRODUCT : START */}
                        <div className="media product">
                            <div className="media-left">
                                <a href="#">
                                    <img
                                        className="media-object"
                                        src="images/bread.jpg"
                                        alt="bread"
                                    />
                                </a>
                            </div>
                            <div className="media-body">
                                <h4 className="media-heading">Bread</h4>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
                                    dicta asperiores veniam repellat unde debitis quisquam magnam
                                    magni ut deleniti!
                                </p>
                                <input
                                    name="quantity-product-1"
                                    type="number"
                                    defaultValue={1}
                                    min={1}
                                />
                                <a data-product={1} href="#" className="price">
                                    {" "}
                                    12 USD{" "}
                                </a>
                            </div>
                        </div>
                        {/* PRODUCT : END */}
                        {/* PRODUCT : START */}
                        <div className="media product">
                            <div className="media-left">
                                <a href="#">
                                    <img
                                        className="media-object"
                                        src="images/Cake.jpg"
                                        alt="cake"
                                    />
                                </a>
                            </div>
                            <div className="media-body">
                                <h4 className="media-heading">Cake</h4>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
                                    dicta asperiores veniam repellat unde debitis quisquam magnam
                                    magni ut deleniti!
                                </p>
                                <input
                                    name="quantity-product-1"
                                    type="number"
                                    defaultValue={1}
                                    min={1}
                                />
                                <a data-product={1} href="#" className="price">
                                    {" "}
                                    12 USD{" "}
                                </a>
                            </div>
                        </div>
                        {/* PRODUCT : END */}
                    </div>
                </div>
            </div>
            {/* LIST PRODUCT : END */}
        </div>
    )
}
