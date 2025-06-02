import { ImageKitUploadResponse } from "@/types";
import Image from "next/image";
import React, { useState } from "react";

const ImageUpload = ({ newsId }: { newsId: string }) => {
    const [file, setFile] = useState<File | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [uploadedImage, setUploadedImage] = useState<ImageKitUploadResponse | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0];
        if (selectedFile) {
            // Validate file type and size
            if (!selectedFile.type.match('image.*')) {
                setError('Only image files are allowed');
                return;
            }
            if (selectedFile.size > 5 * 1024 * 1024) {
                setError('File size should be less than 5MB');
                return;
            }
            setFile(selectedFile);
            setError(null);
        } else {
            setFile(null);
        }
    };

    const handleUpload = async () => {
        if (!file || !newsId) {
            setError('Please select a valid file');
            return;
        }

        setLoading(true);
        setError(null);

        try {
          const formData = new FormData(); // Capital F here
          formData.append('file', file);
          formData.append('newsId', newsId);
  
          const response = await fetch('/api/upload', {  // Should match your route
            method: 'POST',
            body: formData,
          });

            if (!response.ok) {
                throw new Error('Upload failed');
            }

            const data = await response.json();
            setUploadedImage(data);
            setFile(null);
        } catch (err) {
            console.error('Upload error:', err);
            setError('Failed to upload image');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="space-y-4">
            <label className="block text-sm font-medium mb-2">Product Images</label>
            <div className="flex items-center justify-center w-full">
                <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        {loading ? (
                            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
                        ) : uploadedImage ? (
                            <Image
                                src={uploadedImage.thumbnailUrl}
                                alt="Uploaded preview"
                                width={64}
                                height={64}
                                className="object-cover rounded"
                                />
                        ) : (
                            <>
                                <svg
                                    className="w-8 h-8 mb-4 text-gray-500"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 20 16"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                                    />
                                </svg>
                                <p className="mb-2 text-sm text-gray-500">
                                    <span className="font-semibold">Click to upload</span> or drag and drop
                                </p>
                                <p className="text-xs text-gray-500">PNG, JPG, GIF (MAX. 5MB each)</p>
                            </>
                        )}
                    </div>
                    <input 
                        id="dropzone-file" 
                        type="file" 
                        className="hidden" 
                        onChange={handleChange}
                        accept="image/*"
                        disabled={loading}
                    />
                </label>
            </div>

            {file && (
                <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-600">{file.name}</span>
                    <button
                        onClick={handleUpload}
                        disabled={loading}
                        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-blue-300"
                    >
                        {loading ? 'Uploading...' : 'Upload'}
                    </button>
                </div>
            )}

            {error && (
                <p className="text-sm text-red-600">{error}</p>
            )}

            {uploadedImage && (
                <div className="mt-2 p-2 bg-green-50 rounded">
                    <p className="text-sm text-green-600">Image uploaded successfully!</p>
                    <a 
                        href={uploadedImage.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-sm text-blue-600 hover:underline"
                    >
                        View Image
                    </a>
                </div>
            )}
        </div>
    );
};

export default ImageUpload;