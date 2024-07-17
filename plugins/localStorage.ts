export default defineNuxtPlugin(() => {
  return {
    provide: {
      localStorageClient: {
        getItem(key: string) {
          if (import.meta.client) {
            return localStorage.getItem(key);
          } else {
            return undefined;
          }
        },
        setItem(key: string, value: string) {
          if (import.meta.client) {
            return localStorage.setItem(key, value);
          }
        },
      },
    },
  };
});
