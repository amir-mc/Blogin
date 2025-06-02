import { ImageKitUploadResponse } from "@/types";
import { useState } from "react";

export default function ImageUploader({ productId }: { productId: string }) {
  const [uploadedImage, setUploadedImage] = useState<ImageKitUploadResponse | null>(null);

 const handleUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
  const file = event.target.files?.[0];
  if (!file) return;

  const formData = new FormData();
  formData.append("file", file);
  formData.append("productId", productId); // required by your API

  try {
    const response = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) throw new Error("Upload failed");

    const data: ImageKitUploadResponse & { data: any } = await response.json();

    setUploadedImage(data); // ✅ Now types match perfectly
  } catch (error) {
    console.error("Upload failed:", error);
  }
};

  return (
    <div>
      <input type="file" onChange={handleUpload} />
      {uploadedImage && (
        <div>
          <p>Uploaded: {uploadedImage.name}</p>
          <img src={uploadedImage.url} alt={uploadedImage.name} className="mt-2 w-64" />
        </div>
      )}
    </div>
  );
}
