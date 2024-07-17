import type { PizzaIngredient } from '@@/types/Pizza';

export const useIngredientsStore = defineStore('ingredients', () => {
  const ingredients = ref<PizzaIngredient[]>([]);

  async function fetchIngredients() {
    const { data } = await useFetch<PizzaIngredient[]>(`/api/ingredients`);
    if (data.value !== null) {
      ingredients.value = data.value;
    }
  }

  const getIngredientById = computed(() => (id: number) => {
    const item = ingredients.value.find((item) => item.id === id);
    return item ?? null;
  });

  const getIngredientsByArrayId = computed(() => (arrayId: number[]) => {
    return ingredients.value.filter((item) => arrayId.includes(item.id));
  });

  return {
    ingredients,
    getIngredientById,
    getIngredientsByArrayId,
    fetchIngredients,
  };
});
