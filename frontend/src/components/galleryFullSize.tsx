// Overlay.tsx
import React from 'react';

interface OverlayProps {
  src: string; // Required
  description?: string; // Optional
  onClose: () => void;
}

const GalleryFullSize: React.FC<OverlayProps> = ({ src, description, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-75 flex justify-center items-center p-4">
      <div className="bg-white shadow-xl rounded-lg p-4 max-w-3xl max-h-full overflow-auto">
        <img src={src} alt={description || 'Gallery image'} className="mb-4" />
        {description && <p>{description}</p>}
        <button onClick={onClose} className="mt-4 py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700">Close</button>
      </div>
    </div>
  );
};

export default GalleryFullSize;
