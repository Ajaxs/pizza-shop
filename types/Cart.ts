export type CartItem = {
  id: number;
  dough: number;
  size: string;
  count: number;
  topings?: number[];
  price?: number;
};

export type Cart = {
  [key: string]: CartItem;
};
