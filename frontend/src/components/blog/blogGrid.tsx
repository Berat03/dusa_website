import SearchBar from "../repeats/searchBar";
import {useEffect, useState} from "react";
import BlogCard from "./blogCard";

// can give post cat's colour tags
// has both date and datetime property, can infer date from datetime.. do later when setting up backend
const posts = [
    {
        id: 1,
        title: "Berat's first co-leading trip.",
        href: "/indivblog",
        description: "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Berat",
        imageUrl: "https://dusabackend.s3.eu-west-2.amazonaws.com/pageAssets/homePage/dalesImage-min.jpg",
        date: "Mar 16, 2020",
        datetime: "2020-03-16",
        categories: [{title: "Dinnermeet", href: "#"}],
    },
    {
        id: 2,
        title: "The aftermath of the trip.",
        href: "join",
        description: "cabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
        imageUrl: "https://dusabackend.s3.eu-west-2.amazonaws.com/pageAssets/homePage/afterMyTrip-min.jpg",
        date: "Oct 23, 2023",
        datetime: "2020-03-16",
        categories: [{title: "Chrimmermeet", href: "#"}, {title: "Valley Entrance", href: "#"}],
    },
    {
        id: 3,
        title: "Are we going up or down?",
        href: "#",
        description: "Hola me gusta Berat donde esta la bibliotechique",
        imageUrl: "https://dusabackend.s3.eu-west-2.amazonaws.com/pageAssets/homePage/me_stuck-min.jpg",
        date: "May 16, 2024",
        datetime: "2020-03-16",
        categories: [{title: "Abroad", href: "#"}, {title: "Day Trip", href: "#"}],
    },
    {
        id: 4,
        title: "George & Louie dig MaydayHole",
        href: "#",
        description: "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
        imageUrl: "https://dusabackend.s3.eu-west-2.amazonaws.com/pageAssets/homePage/noFaceM-min.jpg",
        date: "Jun 10, 2021",
        datetime: "2020-03-16",
        categories: [{title: "Dinnermeet", href: "#"}],
    },
];

export default function BlogGrid() {
    const [searchValue, setSearchValue] = useState(" ");
    const [filteredResults, setFilteredResults] = useState(posts);

    useEffect(() => {
        const regex = new RegExp(searchValue, 'i');
        const filteredResults = posts.filter(item =>
            regex.test(item.title) || item.categories.some(category => regex.test(category.title)) || regex.test(item.description)
        );
        setFilteredResults(filteredResults);
    }, [searchValue]);

    return (
        <div className="bg-white">
            <div className="flex flex-col justify-center mx-auto max-w-7xl px-6 w-full">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Past trips
                    </h2>
                    <p className="mt-2 text-lg leading-8 text-gray-600">
                        Learn more about what caving entails
                    </p>
                </div>
                <SearchBar setSearchValue={setSearchValue}/>
                <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {filteredResults.map((post) => (
                        <BlogCard post={post}/>
                    ))}
                </div>
            </div>
        </div>
    );
}
