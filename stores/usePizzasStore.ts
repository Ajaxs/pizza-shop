import type { Pizza } from '@@/types/Pizza';

export const usePizzasStore = defineStore('pizzas', () => {
  const pizzas = ref<Pizza[]>([]);

  const fetchPizzas = async (): Promise<void> => {
    const { data } = await useFetch<Pizza[]>(`/api/pizzas`);
    if (data.value !== null) {
      pizzas.value = data.value;
    }
  };

  const getPizzasById = computed(() => (pizzaId: number) => {
    return pizzas.value.find((item) => item.id === pizzaId) ?? null;
  });

  return { pizzas, getPizzasById, fetchPizzas };
});
