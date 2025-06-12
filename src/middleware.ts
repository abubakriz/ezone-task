import { ezoneRefererOnly } from "@/shared/api/ezone";
import { NextRequest, NextResponse } from "next/server";

export const middleware = async (request: NextRequest) => {
  const response = NextResponse.next();

  if (request.cookies.get("shopId")) {
    return response;
  }

  const shopId = await fetchShopId();

  response.cookies.set("shopId", shopId, {
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
  });

  return response;
};

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    "/((?!_next).*)",
    // Handle all other paths
    "/(.*)",
  ],
};

const fetchShopId = async () => {
  const response = await ezoneRefererOnly.get("shop/getRequestShopId");
  return response.data.Data.Id;
};
