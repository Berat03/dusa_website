import Img1 from "../assets/group_valley.jpg"
import Carousel from "./carousel";

export default function BlogIndivCarousel() {
    return (
        <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow">
            <div className="mx-auto px-4 py-5 sm:p-6 sm:w-full lg:w-1/2">
                <Carousel/>
            </div>
            <div className="px-4 py-4 sm:px-6">
                <h1 className="text-center">Title of blog to be passed as prop</h1>
            </div>
        </div>
    )
}
