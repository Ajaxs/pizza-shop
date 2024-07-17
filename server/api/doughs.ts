export default defineEventHandler(async (event) => {
  const doughs = [
    { id: 1, name: 'Обычное' },
    { id: 2, name: 'Тонкое' },
  ];

  return doughs;
});
