export default defineEventHandler(async (event) => {
  const sizes = [
    { id: 'sm', name: 'Маленькая' },
    { id: 'md', name: 'Средняя' },
    { id: 'lg', name: 'Большая' },
  ];

  return sizes;
});
