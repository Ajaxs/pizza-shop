import { PizzaIngredient } from '@@/types/Pizza';

export default defineEventHandler(async (event) => {
  const ingredients: PizzaIngredient[] = [
    { id: 1, name: 'Томаты' },
    { id: 2, name: 'Моцарелла' },
    { id: 3, name: 'Чеддер' },
    { id: 4, name: 'Сулгуни' },
    { id: 5, name: 'Грибы' },
    { id: 6, name: 'Ветчина' },
    { id: 7, name: 'Пепперони' },
    { id: 8, name: 'Болгарский перец' },
    { id: 9, name: 'Курица' },
    { id: 10, name: 'Оливки' },
    { id: 11, name: 'Халапеньо' },
    { id: 12, name: 'Лук' },
    { id: 13, name: 'Креветки' },
    { id: 14, name: 'Бекон' },
    { id: 15, name: 'Ананасы' },
    { id: 16, name: 'Брокколи' },
  ];

  return ingredients;
});
