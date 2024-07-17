<template>
  <div class="main-header">
    <h1>Все пиццы</h1>
    <div class="filter">Фильтры</div>
  </div>
  <div class="list" v-if="pizzasFiltred.length > 0">
    <div class="item" v-for="item in pizzasFiltred" :key="item.id">
      <div class="item-rating">
        <span class="material-symbols-outlined"> kid_star </span>
        {{ item.rating }}
      </div>
      <div class="item-image">
        <img :src="`/main/${item.image}`" :alt="item.name" />
      </div>
      <div class="item-name">{{ item.name }}</div>
      <div class="item-description">
        {{ getIngridients(item.ingridients) }}
      </div>
      <div class="item-footer">
        <div class="price">от {{ minPrice(item.variants) }} руб</div>
        <div class="add-cart">
          <button>
            <span
              class="material-symbols-outlined"
              @click="addItemToCart(item.id, 1, 'sm', [], 1)"
            >
              add_shopping_cart
            </span>
          </button>
        </div>
        <div class="more-details">
          <UButton :to="`/items/${item.id}`">Выбрать</UButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { PizzaVariant, PizzaIngredient } from '@@/types/Pizza';

const { pizzas } = usePizzasStore();
const { ingredients } = useIngredientsStore();
const appStore = useAppStore();

const pizzasFiltred = computed(() => {
  if (appStore.search !== '') {
    return pizzas.filter((item) => {
      return (
        item.name.toLowerCase().indexOf(appStore.search.toLowerCase()) >= 0
      );
    });
  }
  return pizzas;
});

const minPrice = (variants: PizzaVariant[]) => {
  return Math.min.apply(
    null,
    variants.map((item) => item.price),
  );
};

const getIngridients = (ids: number[]) => {
  return ids
    .map((id) => {
      const ingredient = ingredients.find(
        (ingredient: PizzaIngredient) => ingredient.id === id,
      );
      if (ingredient) {
        return ingredient.name;
      }
    })
    .join(', ');
};

// cart
const { addItemToCart } = useCartStore();

useHead({
  title: 'Все пиццы',
  meta: [{ name: 'description', content: 'Выбери то что нравится' }],
});
</script>

<style lang="scss" scoped>
.main-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;

  .title {
    font-size: 18px;
    font-weight: 600;
  }
}

.list {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(3, 1fr);

  .item {
    box-shadow: 0 0 5px #eee;
    padding: 40px 20px 20px;
    position: relative;

    .item-rating {
      position: absolute;
      right: 15px;
      top: 10px;
      display: flex;
      align-items: center;
      gap: 6px;
    }

    .item-image {
      text-align: center;
      margin-bottom: 10px;

      img {
        width: 200px;
        margin: 0 auto;
      }
    }

    .item-name {
      font-size: 18px;
      font-weight: 800;
      margin-bottom: 10px;
    }

    .item-description {
      margin-bottom: 10px;
    }

    .item-footer {
      display: flex;
      align-items: center;
      gap: 10px;

      .price {
        font-size: 18px;
        font-weight: 600;
        flex-grow: 1;
      }

      .add-cart {
        margin-right: 1px;
      }
    }
  }
}
</style>
