import React from 'react';

interface GalleryItemProps {
  src: string;
  description?: string;
  onClick: (src: string, description?: string) => void;
}

const GalleryItem: React.FC<GalleryItemProps> = ({ src, description, onClick }) => {
  return (
    <button className="group relative cursor-pointer overflow-hidden rounded-lg" onClick={() => onClick(src, description)}>
      <img src={src} alt={description || 'Gallery image'} className="object-cover w-full h-full" />
      {description && (
        <div className="absolute inset-0 flex items-end p-4 opacity-0 transition-opacity duration-300 bg-black bg-opacity-50 group-hover:opacity-100">
          <div className="text-white">
            <p className="mb-2 text-sm font-bold">{description}</p>
          </div>
        </div>
      )}
    </button>
  );
};

export default GalleryItem;
