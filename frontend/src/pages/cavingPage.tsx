import React from "react";
import Footer from "../components/repeats/footer";
import CavingBanner from "../components/caving/cavingBanner";
import ScrollNavBar from "../components/repeats/scrollNavBar";
import TripleTextColumn from "../components/caving/tripleTextColumn";
import CavingVideo from "../components/caving/cavingVideo";
import Testimonials from "../components/caving/testimonials";
import Carousel from "../components/blog/carousel";

const imp_images = [
    "https://dusabackend.s3.eu-west-2.amazonaws.com/pageAssets/homePage/srt-min.jpg",
]

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
            <Carousel imageUrls={imp_images}/>
            <Footer/>
        </div>
    );
}
