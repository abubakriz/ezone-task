import { IProduct } from "@/features/productDetails/models/ProductDetails";
import { getImageURL } from "@/shared/api/getImageURL";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/shared/components/Carousel";
import Image from "next/image";

export const ProductImages = ({ product }: { product: IProduct }) => {
  return (
    <Carousel className="w-full" opts={{ direction: "rtl" }}>
      <CarouselContent>
        {product.ProductImages.map((image, i) => (
          <CarouselItem key={image.Id}>
            <Image
              className="aspect-square w-full overflow-hidden rounded-md object-cover"
              src={getImageURL(image.Src)}
              alt={product.Name}
              width={500}
              height={500}
              priority={i == 0}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};
