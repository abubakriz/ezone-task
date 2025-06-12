import { ProductDetails } from "@/features/productDetails/ui/ProductDetails";

export default async function ProductDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div className="container m-4 grid place-items-center">
      <ProductDetails productId={id} />
    </div>
  );
}
