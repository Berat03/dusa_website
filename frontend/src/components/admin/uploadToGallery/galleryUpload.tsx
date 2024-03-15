import {ChangeEvent, useEffect, useState} from 'react';
function GalleryUpload() {
    const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
    const [imagePreviews, setImagePreviews] = useState<string[]>([]);

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files) {
            const newFiles: File[] = [];
            for (let i = 0; i < files.length; i++) {
                newFiles.push(files[i]);
            }
            setSelectedFiles((prevFiles) => [...prevFiles, ...newFiles]);
        }
    };

    const handleRemoveFile = (index: number) => {
        setSelectedFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
    };

    useEffect(() => {
        const previews: string[] = [];
        for (let i = 0; i < selectedFiles.length; i++) {
            const reader = new FileReader();
            reader.onload = (e) => {
                if (e.target && e.target.result) {
                    previews.push(e.target.result as string);
                    setImagePreviews([...previews]);
                }
            };
            reader.readAsDataURL(selectedFiles[i]);
        }
    }, [selectedFiles]);

    const handleUpload = () => {
        if (selectedFiles.length > 0) {
            console.log('Selected Files:', selectedFiles);
        } else {
            console.log('No files selected');
        }
    };

    return (
        <div>
            <input
                type="file"
                accept="image/*"
                multiple
                onChange={handleFileChange}
                className="hidden"
                id="file-upload"
            />
            <label htmlFor="file-upload"
                   className="cursor-pointer block bg-blue-500 w-min text-white font-bold py-2 px-4 rounded">
                Select
            </label>
            {imagePreviews.length > 0 && (
                <div className="mt-4">
                    {imagePreviews.map((preview, index) => (
                        <div key={index} className="flex items-center space-x-4">
                            <img src={preview} alt={`Preview ${index}`} className="h-20 w-20 object-cover"/>
                            <button
                                type="button"
                                onClick={() => handleRemoveFile(index)}
                                className="text-red-500"
                            >
                                <h1 className="rounded-lg bg-gray-100">Remove</h1>
                            </button>
                        </div>
                    ))}
                </div>
            )}
            <button onClick={handleUpload} className="mt-4 bg-green-500 text-white font-bold py-2 px-4 rounded">
                Upload
            </button>
        </div>
    );
}

export default GalleryUpload;
