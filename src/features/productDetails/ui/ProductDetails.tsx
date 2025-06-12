import { fetchProductDetails } from "@/features/productDetails/api/fetchProductDetails";
import { ProductDescription } from "@/features/productDetails/ui/ProductDescription";
import { ProductHeader } from "@/features/productDetails/ui/ProductHeader";
import { RelatedProducts } from "@/features/productDetails/ui/RelatedProducts";

export const ProductDetails = async ({ productId }: { productId: string }) => {
  const data = await fetchProductDetails(productId);

  if (!data) {
    return <div>Not Found</div>;
  }

  return (
    <div className="max-w-256 space-y-8">
      <ProductHeader product={data.Product} />
      <ProductDescription product={data.Product} />
      <RelatedProducts relatedProducts={data.RelatedProducts} />
    </div>
  );
};
