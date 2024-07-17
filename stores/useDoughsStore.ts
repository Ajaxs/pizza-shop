import type { PizzaDough } from '@@/types/Pizza';

export const useDoughsStore = defineStore('doughs', () => {
  const doughs = ref<PizzaDough[]>([]);

  async function fetchDoughs() {
    const { data } = await useFetch<PizzaDough[]>(`/api/doughs`);
    if (data.value !== null) {
      doughs.value = data.value;
    }
  }

  const getDoughById = computed(() => (id: number) => {
    return doughs.value.find((item) => item.id === id) ?? null;
  });

  return { doughs, getDoughById, fetchDoughs };
});
