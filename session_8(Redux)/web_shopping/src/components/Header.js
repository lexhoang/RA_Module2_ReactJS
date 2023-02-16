import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
    return (
        <header className="header_section" style={{ backgroundColor: "#ff47d9 " }}>
            <div className="container-fluid">
                <nav className="navbar navbar-expand-lg custom_nav-container">
                    <NavLink
                        className="navbar-brand"
                        href="index.html"
                        style={{ paddingRight: 200 }}
                    >
                        <span> Rikkei Store </span>
                    </NavLink>
                    <div className="navbar-collapse" id="">
                        <div className="container">
                            <div className="mr-auto flex-column flex-lg-row align-items-center">
                                <ul className="navbar-nav justify-content-between">
                                    <div className="d-none d-lg-flex">
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to="/">
                                                {" "}
                                                HOMEPAGE
                                            </NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to="product">
                                                {" "}
                                                PRODUCT{" "}
                                            </NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to="about">
                                                {" "}
                                                ABOUT{" "}
                                            </NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to="contact">
                                                {" "}
                                                CONTACT
                                            </NavLink>
                                        </li>
                                    </div>
                                    <div className="d-none d-lg-flex">
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to="signIn">
                                                Login / Register
                                            </NavLink>
                                        </li>
                                        <form className="form-inline my-2 ml-5 mb-3 mb-lg-0">
                                            <button
                                                className="btn my-2 my-sm-0 nav_search-btn"
                                                type="submit"
                                            />
                                        </form>
                                    </div>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header >
    )
}