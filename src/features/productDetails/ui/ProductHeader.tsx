import { IProduct } from "@/features/productDetails/models/ProductDetails";
import { AddToCartButton } from "@/features/productDetails/ui/AddToCartButton";
import { BuyNowButton } from "@/features/productDetails/ui/BuyNowButton";
import { ProductImages } from "@/features/productDetails/ui/ProductImages";
import { ProductOptions } from "@/features/productDetails/ui/ProductOptions";
import { ProductPrice } from "@/features/productDetails/ui/ProductPrice";
import { Star } from "lucide-react";

export const ProductHeader = ({ product }: { product: IProduct }) => {
  return (
    <div className="flex flex-col gap-6 md:flex-row">
      <div className="md:basis-3/7">
        <ProductImages product={product} />
      </div>
      <div className="w-full space-y-6 md:basis-4/7">
        <div className="space-y-2">
          <h1 className="text-lg font-normal text-neutral-600">
            {product.Name}
          </h1>
          <div className="text-3xl">
            <ProductPrice product={product} />
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex gap-2">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star key={index} className="text-yellow-500" />
            ))}
          </div>
          <span>التقيمات (0) كتابة تعليق</span>
        </div>

        <ProductOptions product={product.ProductOptions} />

        <div className="space-y-2">
          <AddToCartButton />
          <BuyNowButton />
        </div>
      </div>
    </div>
  );
};
