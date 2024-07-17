import type { PizzaToping } from '@@/types/Pizza';

export default defineEventHandler(async (event) => {
  const topings: PizzaToping[] = [
    { id: 1, name: 'Тыква', image: '1.jpg', price: 30 },
    { id: 2, name: 'Морковь', image: '2.jpg', price: 35 },
    { id: 3, name: 'Петрушка', image: '3.jpg', price: 40 },
    { id: 4, name: 'Картофель', image: '4.jpg', price: 30 },
    { id: 5, name: 'Шампиньоны', image: '5.jpg', price: 35 },
    { id: 6, name: 'Острый перец', image: '6.jpg', price: 40 },
    { id: 7, name: 'Зеленый лук', image: '7.jpg', price: 30 },
    { id: 8, name: 'Брокколи', image: '8.jpg', price: 32 },
    { id: 9, name: 'Зеленый перец', image: '9.jpg', price: 36 },
    { id: 10, name: 'Красный перец', image: '10.jpg', price: 38 },
    { id: 11, name: 'Чеснок', image: '11.jpg', price: 45 },
    { id: 12, name: 'Укроп', image: '12.jpg', price: 42 },
  ];

  return topings;
});
