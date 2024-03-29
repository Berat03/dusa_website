import React, {useEffect, useState} from 'react';
import SearchBar from "../components/repeats/searchBar";
import MasonryGallery from "../components/gallery/galleryMasonary"; // Ensure correct import path

import Footer from "../components/repeats/footer";
import ScrollNavBar from "../components/repeats/scrollNavBar";

const images = [
    {
        imageUrl: "https://dusabackend.s3.eu-west-2.amazonaws.com/pageAssets/homePage/me_stuck-min.jpg",
        title: "Me",
        category: "chrimmermeet",
    },
    {
        imageUrl: "https://dusabackend.s3.eu-west-2.amazonaws.com/pageAssets/homePage/afterMyTrip-min.jpg",
        title: "Chosen when user first inputs",
        category: "dinnermeet",
    },
    {
        imageUrl: "https://dusabackend.s3.eu-west-2.amazonaws.com/pageAssets/squeezeBox.jpg",
        title: "Sick photo",
        category: "Leader Training",
    },
    {
        imageUrl: "https://dusabackend.s3.eu-west-2.amazonaws.com/pageAssets/homePage/group_valley-min.jpg",
        title: "ascending",
        category: "Day Trip",
    },
    {
        imageUrl: "https://dusabackend.s3.eu-west-2.amazonaws.com/pageAssets/homePage/dalesImage-min.jpg",
        title: "extra photo",
        category: "Weekend Trip",
    },
    {
        imageUrl: "https://dusabackend.s3.eu-west-2.amazonaws.com/pageAssets/hannah.jpg",
        title: "alum",
        category: "Leader Training",
    },
    {
        imageUrl: "https://dusabackend.s3.eu-west-2.amazonaws.com/pageAssets/confused.jpg\n",
        title: "confused",
        category: "Leader Training",
    },


];

export default function GalleryPage() {
    const [searchValue, setSearchValue] = useState("");
    const [filteredResults, setFilteredResults] = useState(images);

    useEffect(() => {
        if (!searchValue) {
            setFilteredResults(images);
            return;
        }
        const regex = new RegExp(searchValue, 'i');
        const filtered = images.filter(item => regex.test(item.title) || regex.test(item.category));
        setFilteredResults(filtered);
    }, [searchValue]);

    return (
        <div>
            <div className="sticky top-0 w-full z-50"> {/*Don't know why I need to styling AGAIN */}
                <ScrollNavBar/>
            </div>
            <div className="h-screen">

                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Our images
                    </h2>
                    <p className="mt-2 text-lg leading-8 text-gray-600">
                        View the decades of DUSA legacy
                    </p>
                </div>
                <SearchBar setSearchValue={setSearchValue}/>
                <MasonryGallery images={filteredResults}/>
                <Footer/>
            </div>
        </div>

    );
}
