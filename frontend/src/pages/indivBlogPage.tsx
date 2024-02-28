import Img_1 from "../assets/MaydayJakub.jpg"
import Img_2 from "../assets/dalesImage.jpg"

interface Post { // stored this way in bucket
    id: number;
    title: string;
    href: string;
    description: string;
    imageUrl: string;
    date: string;
    datetime: string;
    category: {
        title: string;
        href: string;
    };
}

interface BlogCardProps {
    post: Post;
}

const images = [
    {
        imageUrl: Img_1,
    },
    {
        imageUrl: Img_2,
    },
];

export default function IndivBlogPage({post}: BlogCardProps) {
    return (
        <h1>Test</h1>
    )
}
