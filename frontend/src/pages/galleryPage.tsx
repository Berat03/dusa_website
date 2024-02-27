import React, { useEffect, useState } from 'react';
import NavBar from "../components/navBar";
import SearchBar from "../components/searchBar";
import MasonryGallery from "../components/masonaryGallery"; // Ensure correct import path
import Img_1 from "../assets/MaydayJakub.jpg";
import Img_2 from "../assets/dalesImage.jpg";
import Img_3 from "../assets/ianImage.jpg";
import Img_4 from "../assets/noFaceM.jpg";
import Img_5 from "../assets/me_stuck.jpg";
import Img_6 from "../assets/srt.jpg";

const images = [
  {
    imageUrl: Img_1,
    title: "Most representative photo",
    category: "chrimmermeet",
  },
  {
    imageUrl: Img_2,
    title: "Chosen when user first inputs",
    category: "dinnermeet",
  },
  {
    imageUrl: Img_3,
    title: "Sick photo",
    category: "Leader Training",
  },
  {
    imageUrl: Img_4,
    title: "ascending",
    category: "normal trip",
  },
  {
    imageUrl: Img_5,
    title: "extra photo",
    category: "my trip",
  },
    {
    imageUrl: Img_6,
    title: "stuck",
    category: "SRT training",
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
    <div className="h-screen">
      <NavBar />
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Our images
        </h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          View the decades of DUSA legacy
        </p>
      </div>
      <SearchBar setSearchValue={setSearchValue} />
      <MasonryGallery images={filteredResults} />
    </div>
  );
}
