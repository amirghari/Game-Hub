const getCroppedImage = (imageUrl: string): string => {
    const index = imageUrl.indexOf("media/") + "media/".length;
    const newUrl = imageUrl.slice(0,index) + "crop/600/400/" + imageUrl.slice(index);
    return newUrl
};

export default getCroppedImage;