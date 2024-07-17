<template>
  <h1>Корзина</h1>
  <div class="cart">
    <CartItem
      v-for="(item, key) in items"
      :item="item"
      :cart-id="key as string"
      :key="key"
    ></CartItem>
    <div class="full-price">Сумма заказа: {{ fullPrice }} руб</div>
  </div>
</template>

<script setup lang="ts">
import type { Cart } from '~/types/Cart';

// calculate price
const { getPrice } = usePrice();

const items = computed((): Cart => {
  const { cartItems } = useCartStore();

  for (let key of Object.keys(cartItems)) {
    cartItems[key].price = getPrice(
      cartItems[key].id,
      cartItems[key].dough,
      cartItems[key].size,
      cartItems[key].topings,
    );
  }
  return cartItems;
});

const fullPrice = computed((): number => {
  return Object.values(items.value).reduce((sum, item) => {
    return sum + item.price * item.count;
  }, 0);
});

useHead({
  title: 'Корзина',
  meta: [{ name: 'description', content: 'Отличный магазин пиццы' }],
});
</script>

<style scoped lang="scss">
.full-price {
  padding-top: 20px;
  text-align: right;
}
</style>
