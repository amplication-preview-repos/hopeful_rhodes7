import { Order } from "../order/Order";
import { JsonValue } from "type-fest";

export type User = {
  age: number | null;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  name: string | null;
  orders?: Array<Order>;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
