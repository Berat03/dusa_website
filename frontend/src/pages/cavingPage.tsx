import React from "react";
import Footer from "../components/repeats/footer";
import CavingBanner from "../components/caving/cavingBanner";
import ImageBgOverlapTextFull from "../components/imageBgOverlapTextFull";
import ScrollNavBar from "../components/repeats/scrollNavBar";
import TripleTextColumn from "../components/caving/tripleTextColumn";
import CavingVideo from "../components/caving/cavingVideo";
import Testimonials from "../components/caving/testimonials";

export default function CavingPage() {
    return (
        <div className="w-full bg-custom_bg">
            <div className="sticky top-0 z-50">
                <ScrollNavBar/>
            </div>
            <div className="h-2/3 bg-gradient-to-b to-custom_bg from-gray-800">
                <CavingBanner/>
            </div>
            <CavingVideo/>
            <TripleTextColumn/>

            <Testimonials/>
            <Footer/>
        </div>
    );
}
