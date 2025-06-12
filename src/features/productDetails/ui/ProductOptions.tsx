import { IProductOption } from "@/features/productDetails/models/ProductDetails";
import { ProductOption } from "@/features/productDetails/ui/ProductOption";

export const ProductOptions = ({ product }: { product: IProductOption[] }) => {
  return (
    <div className="space-y-6">
      {product
        .sort((a, b) => a.Position - b.Position)
        .map((option) => (
          <section
            className="space-y-2"
            aria-label={option.CatName}
            key={option.OptId}
          >
            <h2>{option.CatName}</h2>
            <div className="flex gap-2">
              {option.Items.map((item) => (
                <ProductOption key={item.Id} item={item} option={option} />
              ))}
            </div>
          </section>
        ))}
    </div>
  );
};
