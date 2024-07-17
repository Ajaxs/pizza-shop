export const useAppStore = defineStore('app', () => {
  const search = ref<string>('');

  const setSearch = (str: string): void => {
    search.value = str;
  };

  const getSearch = computed((): string => {
    return search.value;
  });

  return { search, setSearch, getSearch };
});
