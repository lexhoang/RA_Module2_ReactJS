import React from 'react'
import { ImagesFind } from "../assets/Images";


export default function FindComp() {
    return (
        <section className="find_section layout_padding-bottom">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6 col-md-8 offset-md-2">
                        <div className="find_container">
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="find_container-img">
                                        <img src={ImagesFind.imgFind} alt="" />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <h3>
                                        Find Everything <br />
                                        From A to Z
                                    </h3>
                                    <p>Shop Back to school</p>
                                </div>
                            </div>
                        </div>
                        <div className="shop_container">
                            <div className="row">
                                <div className="col-sm-6">
                                    <p>Shoes</p>
                                    <h3>Shop by catagories</h3>
                                    <div>
                                        <a href=""> View More </a>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="shoe_img-box">
                                        <img src={ImagesFind.imgShoes} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="find_img-box">
                            <img src={ImagesFind.imgFind_Hero} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
