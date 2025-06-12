import { IProduct } from "@/features/productDetails/models/ProductDetails";
import { cn } from "@/shared/lib/utils";

export const ProductPrice = ({ product }: { product: IProduct }) => {
  const isDiscounted = product.IsDiscounted;
  return (
    <div className="flex items-center gap-2 font-bold">
      {isDiscounted && (
        <span className="line-through">{product.Caprice} د.ل</span>
      )}
      <span
        className={cn({
          "text-red-500": isDiscounted,
        })}
      >
        {product.Sprice ?? product.SPrice} د.ل
      </span>
    </div>
  );
};
