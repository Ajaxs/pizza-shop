<template>
  <header class="header">
    <div class="logo">PizzaShop</div>
    <nav class="menu">
      <ul>
        <li><nuxt-link to="/">Главная</nuxt-link></li>
        <li><nuxt-link to="/discount">Акции</nuxt-link></li>
        <li><nuxt-link to="/contact">Контакты</nuxt-link></li>
      </ul>
    </nav>
    <div class="search">
      <input type="text" placeholder="Поиск" v-model="search" />
    </div>
    <div class="cart">
      <a href="/cart">Корзина ({{ count }})</a>
    </div>
  </header>
</template>

<script setup lang="ts">
const search = ref('');

const count = computed(() => {
  const { countItemsInCart } = useCartStore();
  return countItemsInCart;
});

//search
const { setSearch } = useAppStore();
watch(search, (value) => {
  setSearch(value);
});

onMounted(() => {
  if (import.meta.client) {
    const { fetchCart } = useCartStore();
    fetchCart();
  }
});
</script>
