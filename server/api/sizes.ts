import { PizzaSize } from '@@/types/Pizza';

export default defineEventHandler(async (event) => {
  const sizes: PizzaSize[] = [
    { id: 'sm', name: 'Маленькая' },
    { id: 'md', name: 'Средняя' },
    { id: 'lg', name: 'Большая' },
  ];

  return sizes;
});
