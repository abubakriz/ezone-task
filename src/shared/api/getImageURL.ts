export const getImageURL = (image: string) => {
  if (image) {
    return process.env.NEXT_PUBLIC_IMAGES_URL + "Prods/" + image;
  }
  return process.env.NEXT_PUBLIC_IMAGES_URL + "no-img300x300.png";
};
