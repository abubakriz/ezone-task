import { Button } from "@/shared/components/Button";
import { DollarSign } from "lucide-react";

export const BuyNowButton = () => {
  return (
    <Button className="w-full bg-red-400 text-white shadow">
      <span>اشتري الآن</span>
      <DollarSign fill="currentColor" />
    </Button>
  );
};
