import type { Cart, CartItem } from '@@/types/Cart';

export const useCartStore = defineStore('cart', () => {
  const { $localStorageClient } = useNuxtApp();
  const cartItems = ref<Cart>({});

  const createHashKey = (
    id: number,
    dough: number,
    size: string,
    toppings: number[],
  ): string => {
    let hash = `${id}_${dough}_${size}`;
    if (toppings.length > 0) {
      hash += `__${toppings.join('_')}`;
    }
    return hash;
  };

  const save = (items: Cart): void => {
    $localStorageClient.setItem('cart', JSON.stringify(items));
  };

  const fetchCart = (): void => {
    let cart = $localStorageClient.getItem('cart');
    if (cart) {
      cartItems.value = JSON.parse(cart);
    } else {
      cartItems.value = {};
    }
  };

  const addItemToCart = (
    id: number,
    dough: number,
    size: string,
    topings: number[] = [],
    count: number = 1,
  ): void => {
    const key = createHashKey(id, dough, size, topings);
    cartItems.value[key] = cartItems.value[key]
      ? { ...cartItems.value[key], count: cartItems.value[key].count + count }
      : { id, dough, size, count, topings, price: 0 };

    save(cartItems.value);
  };

  const removeItemFromCart = (key: string): void => {
    if (cartItems.value[key]) {
      delete cartItems.value[key];
      save(cartItems.value);
    }
  };
  const updateCountItem = (key: string, count: number): void => {
    if (cartItems.value[key]) {
      cartItems.value[key].count = Number(count);
      save(cartItems.value);
    }
  };

  const countItemsInCart = computed((): number => {
    return Object.values(cartItems.value).reduce((count, item: CartItem) => {
      return count + item.count;
    }, 0);
  });

  return {
    cartItems,
    countItemsInCart,
    fetchCart,
    createHashKey,
    addItemToCart,
    removeItemFromCart,
    updateCountItem,
  };
});
