import SearchBar from "./searchBar";
import {useEffect, useState} from "react";
import BlogCard from "./blogCard";

const posts = [
    {
        id: 1,
        title: "Boost your conversion rate",
        href: "/",
        description:
            "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Berat",
        imageUrl:
            "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
        date: "Mar 16, 2020",
        datetime: "2020-03-16",
        category: {title: "Dinnermeet", href: "#"},
    },
    {
        id: 2,
        title: "Title 2",
        href: "join",
        description:
            "cabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
        imageUrl:
            "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
        date: "Mar 16, 2020",
        datetime: "2020-03-16",
        category: {title: "Chrimmermeet", href: "#"},
    },
    {
        id: 3,
        title: "Does this work?",
        href: "#",
        description:
            "Hola me gusta Berat donde esta la bibliotechique",
        imageUrl:
            "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
        date: "Mar 16, 2020",
        datetime: "2020-03-16",
        category: {title: "Abroad", href: "#"},
    },
    {
        id: 4,
        title: "Boost your conversion rate",
        href: "#",
        description:
            "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
        imageUrl:
            "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
        date: "Mar 16, 2020",
        datetime: "2020-03-16",
        category: {title: "Dinnermeet", href: "#"},
    },
];

export default function BlogGrid() {
    const [searchValue, setSearchValue] = useState(" ")
    const [filteredResults, setFilteredResults] = useState(posts);
    // next two instance of filteredResults was filterResults

    useEffect(() => {
        const regex = new RegExp(searchValue, 'i');
        const filteredResults = posts.filter(item =>
            regex.test(item.title) || regex.test(item.category.title) || regex.test(item.description)
        );
        setFilteredResults(filteredResults);
    }, [searchValue, posts]); //ig do i really need posts??? no but should i?


    return (
        <div className="bg-white">
            <div className="flex flex-col justify-center mx-auto max-w-7xl px-6 ">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Past trips
                    </h2>
                    <p className="mt-2 text-lg leading-8 text-gray-600">
                        Learn more about what caving entails
                    </p>
                </div>
                <SearchBar setSearchValue={setSearchValue} />
                <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {filteredResults.map((post) => (
                        <BlogCard post={post}/>
                    ))}
                </div>
            </div>
        </div>
    );
}
