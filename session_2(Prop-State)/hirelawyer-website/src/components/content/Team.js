import React, { Component } from 'react';
// import ImagesTeam_Team1 from '../../assets/images/team-1.jpg'
// import ImagesTeam_Team2 from '../../assets/images/team-2.jpg'
// import ImagesTeam_Team3 from '../../assets/images/team-3.jpg'
// import ImagesTeam_Team4 from '../../assets/images/team-4.jpg'
// import ImagesTeam_Team5 from '../../assets/images/team-5.jpg';

import { ImagesTeam } from '../../assets/Images'
class Team extends Component {
    render() {
        return (
            <div className="container-fluid py-5">
                <div className="container py-5">
                    <div className="text-center pb-2">
                        <h6 className="text-uppercase">Our Attorneys</h6>
                        <h1 className="mb-4">Meet Our Attorneys</h1>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="bg-primary rounded" style={{ height: 200 }} />
                            <div
                                className="owl-carousel team-carousel position-relative"
                                style={{ marginTop: "-97px", padding: "0 30px" }}
                            >
                                <div className="team-item text-center bg-white rounded overflow-hidden pt-4">
                                    <h5 className="mb-2 px-4">Attorney Name</h5>
                                    <p className="mb-3 px-4">Practice Area</p>
                                    <div className="team-img position-relative">
                                        <img className="img-fluid" src={ImagesTeam.team_1} alt="" />
                                        <div className="team-social">
                                            <a className="btn btn-outline-light btn-square mx-1" href="#">
                                                <i className="fab fa-twitter" />
                                            </a>
                                            <a className="btn btn-outline-light btn-square mx-1" href="#">
                                                <i className="fab fa-facebook-f" />
                                            </a>
                                            <a className="btn btn-outline-light btn-square mx-1" href="#">
                                                <i className="fab fa-linkedin-in" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="team-item text-center bg-white rounded overflow-hidden pt-4">
                                    <h5 className="mb-2 px-4">Attorney Name</h5>
                                    <p className="mb-3 px-4">Practice Area</p>
                                    <div className="team-img position-relative">
                                        <img className="img-fluid" src={ImagesTeam.team_2} alt="" />
                                        <div className="team-social">
                                            <a className="btn btn-outline-light btn-square mx-1" href="#">
                                                <i className="fab fa-twitter" />
                                            </a>
                                            <a className="btn btn-outline-light btn-square mx-1" href="#">
                                                <i className="fab fa-facebook-f" />
                                            </a>
                                            <a className="btn btn-outline-light btn-square mx-1" href="#">
                                                <i className="fab fa-linkedin-in" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="team-item text-center bg-white rounded overflow-hidden pt-4">
                                    <h5 className="mb-2 px-4">Attorney Name</h5>
                                    <p className="mb-3 px-4">Practice Area</p>
                                    <div className="team-img position-relative">
                                        <img className="img-fluid" src={ImagesTeam.team_3} alt="" />
                                        <div className="team-social">
                                            <a className="btn btn-outline-light btn-square mx-1" href="#">
                                                <i className="fab fa-twitter" />
                                            </a>
                                            <a className="btn btn-outline-light btn-square mx-1" href="#">
                                                <i className="fab fa-facebook-f" />
                                            </a>
                                            <a className="btn btn-outline-light btn-square mx-1" href="#">
                                                <i className="fab fa-linkedin-in" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="team-item text-center bg-white rounded overflow-hidden pt-4">
                                    <h5 className="mb-2 px-4">Attorney Name</h5>
                                    <p className="mb-3 px-4">Practice Area</p>
                                    <div className="team-img position-relative">
                                        <img className="img-fluid" src={ImagesTeam.team_4} alt="" />
                                        <div className="team-social">
                                            <a className="btn btn-outline-light btn-square mx-1" href="#">
                                                <i className="fab fa-twitter" />
                                            </a>
                                            <a className="btn btn-outline-light btn-square mx-1" href="#">
                                                <i className="fab fa-facebook-f" />
                                            </a>
                                            <a className="btn btn-outline-light btn-square mx-1" href="#">
                                                <i className="fab fa-linkedin-in" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="team-item text-center bg-white rounded overflow-hidden pt-4">
                                    <h5 className="mb-2 px-4">Attorney Name</h5>
                                    <p className="mb-3 px-4">Practice Area</p>
                                    <div className="team-img position-relative">
                                        <img className="img-fluid" src={ImagesTeam.team_5} alt="" />
                                        <div className="team-social">
                                            <a className="btn btn-outline-light btn-square mx-1" href="#">
                                                <i className="fab fa-twitter" />
                                            </a>
                                            <a className="btn btn-outline-light btn-square mx-1" href="#">
                                                <i className="fab fa-facebook-f" />
                                            </a>
                                            <a className="btn btn-outline-light btn-square mx-1" href="#">
                                                <i className="fab fa-linkedin-in" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Team;