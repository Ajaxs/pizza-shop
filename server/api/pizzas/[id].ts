import { pizzas } from './data';

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id');

  return pizzas.find((item) => item.id === Number(id));
});
