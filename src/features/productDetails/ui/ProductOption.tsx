"use client";

import {
  IProductOption,
  IProductOptionItem,
} from "@/features/productDetails/models/ProductDetails";
import { Button } from "@/shared/components/Button";
import { cn } from "@/shared/lib/utils";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export const ProductOption = ({
  item,
  option,
}: {
  item: IProductOptionItem;
  option: IProductOption;
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const selected =
    searchParams.get(option.CatName) === item.CatItemId.toString();

  const handleClick = () => {
    const mutableSearchParams = new URLSearchParams(searchParams);
    if (selected) {
      mutableSearchParams.delete(option.CatName);
    } else {
      mutableSearchParams.set(option.CatName, item.CatItemId.toString());
    }

    router.push(pathname + "?" + mutableSearchParams.toString());
  };

  return (
    <Button
      style={{
        backgroundColor: item.BcolorHex,
        color: item.FcolorHex,
      }}
      variant="circle"
      size="icon"
      className={cn({
        "outline outline-offset-2 outline-red-500": selected,
      })}
      onClick={handleClick}
    >
      {!item.BcolorHex && item.ItemName}
    </Button>
  );
};
