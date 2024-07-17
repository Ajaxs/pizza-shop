import type { PizzaSize } from '@@/types/Pizza';

export const useSizesStore = defineStore('sizes', () => {
  const sizes = ref<PizzaSize[]>([]);

  async function fetchSizes(): Promise<void> {
    const { data } = await useFetch<PizzaSize[]>(`/api/sizes`);
    if (data.value !== null) {
      sizes.value = data.value;
    }
  }

  const getSizeById = computed(() => (id: string): PizzaSize | null => {
    return sizes.value.find((item) => item.id === id) ?? null;
  });

  return { sizes, getSizeById, fetchSizes };
});
