import { PizzaDough } from '@@/types/Pizza';

export default defineEventHandler(async (event) => {
  const doughs: PizzaDough[] = [
    { id: 1, name: 'Обычное' },
    { id: 2, name: 'Тонкое' },
  ];

  return doughs;
});
