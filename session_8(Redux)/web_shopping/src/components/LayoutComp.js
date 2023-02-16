import React from 'react'
import { Outlet } from 'react-router'
import Header from './Header'
import Footer from './Footer'

export default function LayoutComp() {
    return (
        <div>
            {/* <!-- header section strats --> */}
            <Header />
            {/* <!-- end header section --> */}

            {/* <!-- content section strats --> */}
            <Outlet></Outlet>
            {/* <!-- end content section --> */}

            {/* <!-- footer section --> */}
            <Footer />
            {/* <!-- footer section --> */}
        </div>
    )
}
