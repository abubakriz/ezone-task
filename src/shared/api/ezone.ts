import axios from "axios";
import { cookies, headers } from "next/headers";

export const ezoneRefererOnly = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

ezoneRefererOnly.interceptors.request.use(async (config) => {
  const headersList = await headers();
  const referer = headersList.get("Referer");

  if (referer) {
    config.headers["Referer"] = new URL(referer).origin;
  }

  return config;
});

const ezone = ezoneRefererOnly.create();

ezone.interceptors.request.use(async (config) => {
  const cookieStore = await cookies();
  const shopId = cookieStore.get("shopId")?.value;

  if (shopId) {
    config.headers["sId"] = shopId;
  }

  return config;
});

export default ezone;
