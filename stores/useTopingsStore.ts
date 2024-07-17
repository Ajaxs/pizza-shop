import type { PizzaToping } from '@@/types/Pizza';

export const useTopingsStore = defineStore('topings', () => {
  const topings = ref<PizzaToping[]>([]);

  async function fetchTopings() {
    const { data } = await useFetch<PizzaToping[]>(`/api/topings`);
    if (data.value !== null) {
      topings.value = data.value;
    }
  }

  const getTopingById = computed(() => (id: number) => {
    return topings.value.find((item) => item.id === id) ?? null;
  });

  const getTopingsByArrayId = computed(() => (arrayId: number[] = []) => {
    return topings.value.filter((item) => arrayId.includes(item.id));
  });

  return { topings, getTopingById, getTopingsByArrayId, fetchTopings };
});
