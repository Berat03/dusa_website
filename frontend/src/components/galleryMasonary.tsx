// GalleryMasonry.tsx
import React, { useState } from 'react';
import GalleryItem from './galleryItem';
import GalleryFullSize from './galleryFullSize';

interface ImageData {
  imageUrl: string; // Required
  title?: string; // Optional
  category?: string; // Optional
}

interface MasonryGalleryProps {
  images: ImageData[];
}

const GalleryMasonry: React.FC<MasonryGalleryProps> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState<ImageData | null>(null);

  const handleItemClick = (imageUrl: string, title?: string) => {
    setSelectedImage({ imageUrl, title }); // No need to set category if not used in Overlay
  };

  const handleClose = () => setSelectedImage(null);

  return (
    <div className="columns-1 gap-4 space-y-4 p-4 sm:columns-2 md:columns-3 lg:columns-4">
      {images.map((item, index) => (
        <GalleryItem key={index} src={item.imageUrl} description={item.title} onClick={handleItemClick} />
      ))}
      {selectedImage && (
        <GalleryFullSize src={selectedImage.imageUrl} description={selectedImage.title} onClose={handleClose} />
      )}
    </div>
  );
};

export default GalleryMasonry;
