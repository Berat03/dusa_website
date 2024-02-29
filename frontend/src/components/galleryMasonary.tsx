import React from 'react';

interface GalleryItemProps {
    src: string;
    description: string;
}

const GalleryItem: React.FC<GalleryItemProps> = ({src, description}) => {
    return (
        <div className="group relative cursor-pointer overflow-hidden rounded-md">
            <img src={src} alt={description} className="object-cover w-full h-full"/>
            <div
                className="absolute inset-0 flex items-end p-4 opacity-0 transition-opacity duration-300 bg-black bg-opacity-50 group-hover:opacity-100">
                <div className="text-white">
                    <p className="mb-2 text-sm font-bold">{description}</p>
                </div>
            </div>
        </div>
    );
}


interface ImageData {
    imageUrl: string;
    title: string;
    category: string;
}

interface MasonryGalleryProps {
    images: ImageData[];
}

const GalleryMasonary: React.FC<MasonryGalleryProps> = ({images}) => {
    return (
        <div className="columns-1 gap-4 space-y-4 p-4 sm:columns-2 md:columns-3 lg:columns-4">
            {images.map((item, index) => (
                <GalleryItem key={index} src={item.imageUrl} description={item.title}/>
            ))}
        </div>
    );
}

export default GalleryMasonary;