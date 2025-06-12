import { Button } from "@/shared/components/Button";
import { ShoppingCart } from "lucide-react";

export const AddToCartButton = () => {
  return (
    <Button className="w-full border border-neutral-400 shadow">
      <span>أضف للسلة</span>
      <ShoppingCart fill="currentColor" />
    </Button>
  );
};
