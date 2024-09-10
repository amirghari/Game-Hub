import noImage from '../assets/Image Placeholder/no-image-placeholder-6f3882e0.webp';

const getCroppedImage = (imageUrl: string): string => {
    if (!imageUrl) return noImage;
    const index = imageUrl.indexOf("media/") + "media/".length;
    const newUrl = imageUrl.slice(0,index) + "crop/600/400/" + imageUrl.slice(index);
    return newUrl
};

export default getCroppedImage;