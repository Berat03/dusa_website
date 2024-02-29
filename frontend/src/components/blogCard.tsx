import {useNavigate} from "react-router-dom";

interface Category {
    title: string;
    href: string;
}

interface Post {
    id: number;
    title: string;
    href: string;
    description: string;
    imageUrl: string;
    date: string;
    datetime: string;
    categories: Category[];
}

interface BlogCardProps {
    post: Post;
}

export default function BlogCard({post}: BlogCardProps) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(post.href);
    };

    return (
        <div onClick={handleClick} className="cursor-pointer" role="link" tabIndex={0}>
            <article key={post.id} className="flex flex-col items-start justify-between">
                <div className="relative w-full">
                    <img src={post.imageUrl} alt="" className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"/>
                    <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10"/>
                </div>
                <div className="max-w-xl">
                    <div className="mt-8 flex items-center gap-x-4 text-xs">
                        <time dateTime={post.datetime} className="text-gray-500">
                            {post.date}
                        </time>
                        {post.categories.map((category, index) => (
                            <a key={index} href={category.href} className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                                {category.title}
                            </a>
                        ))}
                    </div>
                    <div className="group relative">
                        <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                            <a href={post.href}>
                                <span className="absolute inset-0"/>
                                {post.title}
                            </a>
                        </h3>
                        <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                            {post.description}
                        </p>
                    </div>
                </div>
            </article>
        </div>
    );
}
