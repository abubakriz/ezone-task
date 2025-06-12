import { EzoneResponse } from "@/shared/api/EzoneResponse";

export type IProduct = {
  Id: number;
  Name: string;
  Description: string;
  Code: string | null;
  Sku: string | null;
  Wazn: string | null;
  SPrice: number;
  Sprice: number;
  Caprice: number;
  StockQuantity: number;
  NoQtySell: boolean;
  IsDiscounted: boolean;
  IsVariant: boolean;
  CoverImg: string;
  IsPreOrder: boolean;
  ProductImages: IProductImage[];
  ProductOptions: IProductOption[];
};

export type IProductImage = {
  Id: number;
  Position: number;
  Src: string;
};

export type IProductOption = {
  OptId: number;
  Position: number;
  CatId: number;
  CatName: string;
  Items: IProductOptionItem[];
};

export type IProductOptionItem = {
  Id: number;
  CatItemId: number;
  ItemName: string;
  BcolorHex: string;
  FcolorHex: string;
};

export type IProductDetails = {
  Product: IProduct;
  RelatedProducts: IProduct[];
};

export type IProductDetailsResponse = EzoneResponse<IProductDetails>;
