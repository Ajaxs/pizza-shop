export type CartItem = {
  id: number;
  dough: number;
  size: string;
  count: number;
  price: number;
  topings?: number[];
};

export type Cart = {
  [key: string]: CartItem;
};
