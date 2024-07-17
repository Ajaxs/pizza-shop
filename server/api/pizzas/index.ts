import { pizzas } from './data';

export default defineEventHandler(async (event) => {
  return pizzas;
});
