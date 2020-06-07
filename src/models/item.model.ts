import { Price } from "./price.model";

export interface Item {
  id: string;
  title: string;
  condition: string;
  free_shipping: boolean;
  picture: string;
  price: Price;
}