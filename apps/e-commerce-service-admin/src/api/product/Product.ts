import { OrderItem } from "../orderItem/OrderItem";

export type Product = {
  createdAt: Date;
  description: string | null;
  id: string;
  name: string | null;
  orderItems?: Array<OrderItem>;
  price: number | null;
  updatedAt: Date;
};
