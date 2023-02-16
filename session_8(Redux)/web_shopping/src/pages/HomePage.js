import React from 'react'
import Slider from '../components/Slider';
import DetailComp from '../components/DetailComp';
import ProductComp from '../components/ProductComp';
import FindComp from '../components/home/FindComp';
import ClientSection from '../components/home/ClientSection';
import SignSection from '../components/SignSection';
import InfoSection from '../components/Footer';


export default function HomePage() {
    return (
        <div>
            {/* <!-- slider section --> */}
            <Slider />
            {/* <!-- end slider section --> */}

            {/* <!-- detail section --> */}
            <DetailComp />
            {/* <!-- end detail section --> */}


            {/* <!-- products section --> */}
            <ProductComp />
            {/* <!-- end products section --> */}


            {/* <!-- find section --> */}
            <FindComp />
            {/* <!-- end find section --> */}


            {/* <!-- client section --> */}
            <ClientSection />
            {/* <!-- end client section --> */}


            {/* <!-- sign section --> */}
            <SignSection />
            {/* <!-- end sign section --> */}
        </div>
    )
}
