import Carousel from "./carousel";


const bullpotChat = " https://dusabackend.s3.eu-west-2.amazonaws.com/pageAssets/bullpotChat.jpg"
const fatherStretch = "https://dusabackend.s3.eu-west-2.amazonaws.com/pageAssets/fatherStretch.jpg"

export default function BlogFullHeader() {
    return (
        <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow">
            <div className="px-4 py-5 sm:p-6">
                <Carousel/>
            </div>
            <div className="px-4 py-4 sm:px-6">
                <h1>Helloooo</h1>
            </div>
        </div>
    )
}
