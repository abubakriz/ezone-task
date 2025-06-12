import { IProductDetailsResponse } from "@/features/productDetails/models/ProductDetails";
import ezone from "@/shared/api/ezone";

export const fetchProductDetails = async (productId: string) => {
  const response = await ezone.get<IProductDetailsResponse>(
    "ShopProducts/ProductDetail/" + productId,
  );
  return response.data.Data;
};
