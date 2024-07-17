export type PizzaSize = {
  id: string;
  name: string;
};

export type PizzaIngredient = {
  id: number;
  name: string;
};

export type PizzaToping = {
  id: number;
  name: string;
  image: string;
  price: number;
};

export type PizzaDough = {
  id: number;
  name: string;
};

export type PizzaVariant = {
  dough: number;
  size: PizzaSize['id'];
  price: number;
};

export type Pizza = {
  id: number;
  name: string;
  image: string;
  ingridients: number[];
  rating: number;
  variants: PizzaVariant[];
  avalible_topings: number[];
};
