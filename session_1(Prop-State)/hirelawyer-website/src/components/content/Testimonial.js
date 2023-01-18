import React, { Component } from 'react'
// import ImagesTestimonial_Testimonial1 from '../../assets/images/testimonial-1.jpg'
// import ImagesTestimonial_Testimonial2 from '../../assets/images/testimonial-2.jpg'
// import ImagesTestimonial_Testimonial3 from '../../assets/images/testimonial-3.jpg'
// import ImagesTestimonial_Testimonial4 from '../../assets/images/testimonial-4.jpg'

import { ImagesTestimonial } from '../../assets/Images'
class Testimonial extends Component {
    render() {
        return (
            <div className="container-fluid py-5">
                <div className="container py-5">
                    <div className="text-center pb-5">
                        <h6 className="text-uppercase">Testimonial</h6>
                        <h1 className="mb-5">What Our Clients Say</h1>
                    </div>
                    <div className="owl-carousel testimonial-carousel">
                        <div className="testimonial-item">
                            <div className="testimonial-text position-relative bg-secondary text-light rounded p-5 mb-4">
                                Sed ea amet kasd elitr stet nonumy, stet rebum et ipsum est duo elitr
                                clita lorem
                            </div>
                            <div className="d-flex align-items-center pt-3">
                                <img
                                    className="img-fluid rounded-circle"
                                    src={ImagesTestimonial.testimonial_1}
                                    style={{ width: 80, height: 80 }}
                                    alt=""
                                />
                                <div className="pl-4">
                                    <h5>Client Name</h5>
                                    <p className="m-0">Profession</p>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-item">
                            <div className="testimonial-text position-relative bg-secondary text-light rounded p-5 mb-4">
                                Sed ea amet kasd elitr stet nonumy, stet rebum et ipsum est duo elitr
                                clita lorem
                            </div>
                            <div className="d-flex align-items-center pt-3">
                                <img
                                    className="img-fluid rounded-circle"
                                    src={ImagesTestimonial.testimonial_2}
                                    style={{ width: 80, height: 80 }}
                                    alt=""
                                />
                                <div className="pl-4">
                                    <h5>Client Name</h5>
                                    <p className="m-0">Profession</p>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-item">
                            <div className="testimonial-text position-relative bg-secondary text-light rounded p-5 mb-4">
                                Sed ea amet kasd elitr stet nonumy, stet rebum et ipsum est duo elitr
                                clita lorem
                            </div>
                            <div className="d-flex align-items-center pt-3">
                                <img
                                    className="img-fluid rounded-circle"
                                    src={ImagesTestimonial.testimonial_3}
                                    style={{ width: 80, height: 80 }}
                                    alt=""
                                />
                                <div className="pl-4">
                                    <h5>Client Name</h5>
                                    <p className="m-0">Profession</p>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-item">
                            <div className="testimonial-text position-relative bg-secondary text-light rounded p-5 mb-4">
                                Sed ea amet kasd elitr stet nonumy, stet rebum et ipsum est duo elitr
                                clita lorem
                            </div>
                            <div className="d-flex align-items-center pt-3">
                                <img
                                    className="img-fluid rounded-circle"
                                    src={ImagesTestimonial.testimonial_4}
                                    style={{ width: 80, height: 80 }}
                                    alt=""
                                />
                                <div className="pl-4">
                                    <h5>Client Name</h5>
                                    <p className="m-0">Profession</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
export default Testimonial;
