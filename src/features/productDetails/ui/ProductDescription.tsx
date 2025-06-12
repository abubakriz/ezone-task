import { IProduct } from "@/features/productDetails/models/ProductDetails";
import { Separator } from "@/shared/components/Separator";

export const ProductDescription = ({ product }: { product: IProduct }) => {
  return (
    <section className="space-y-4" aria-labelledby="description">
      <h2 id="description">تفاصيل المنتج</h2>
      <Separator />
      <div dangerouslySetInnerHTML={{ __html: product.Description }}></div>
    </section>
  );
};
