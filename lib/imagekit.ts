import ImageKit from "imagekit";

interface ImageKitConfig {
    publicKey: string;
    privateKey: string;
    urlEndpoint: string;
}

export const imagekit = new ImageKit({
    publicKey: process.env.NEXT_PUBLIC_IMAGETOOLKIT_PUBLIC_KEY!,
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY!,
    urlEndpoint: process.env.NEXT_PUBLIC_IMAGETOOLKIT_ENDPOINT!
} as ImageKitConfig);

