import { IProduct } from "@/features/productDetails/models/ProductDetails";
import { ProductPrice } from "@/features/productDetails/ui/ProductPrice";
import { getImageURL } from "@/shared/api/getImageURL";
import { Separator } from "@/shared/components/Separator";
import Image from "next/image";
import Link from "next/link";

export const RelatedProducts = ({
  relatedProducts,
}: {
  relatedProducts: IProduct[];
}) => {
  return (
    <section className="space-y-4" aria-labelledby="related-products">
      <h2 id="related-products">منتجات شبيهة</h2>
      <Separator />
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {relatedProducts.slice(0, 4).map((product) => (
          <Link href={`/products/${product.Id}`} key={product.Id}>
            <RelatedProductCard product={product} />
          </Link>
        ))}
      </div>
    </section>
  );
};

const RelatedProductCard = ({ product }: { product: IProduct }) => {
  return (
    <div className="group overflow-hidden rounded-md border border-neutral-200">
      <Image
        className="aspect-square w-full border-b border-neutral-200 object-cover transition-transform group-hover:scale-[1.02]"
        key={product.Id}
        src={getImageURL(product.CoverImg)}
        alt={product.Name}
        width={300}
        height={300}
      />
      <div className="space-y-2 p-2">
        <h2 className="text-sm text-black">{product.Name}</h2>
        <ProductPrice product={product} />
      </div>
    </div>
  );
};
