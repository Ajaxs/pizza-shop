<template>
  <div v-if="pizza">
    <div class="item-name">{{ pizza.name }}</div>
    <div class="item-view">
      <div class="image">
        <img :src="`/main/${pizza.image}`" :alt="pizza.name" />
      </div>
      <div class="item-variants">
        <UButton @click="addToCart">В корзину</UButton>
        <br />
        <br />
        <div class="item-section item-ingredients" v-if="price">
          <div class="title">Цена</div>
          {{ price }} руб
        </div>
        <div class="item-section item-ingredients" v-if="ingredients">
          <div class="title">Ингредиенты</div>
          {{ ingredients }}
        </div>
        <div class="item-section item-doughs">
          <div class="title">Тесто</div>
          <URadioGroup
            v-model="dough"
            :options="doughs"
            optionAttribute="name"
            valueAttribute="id"
            class="radio-options"
          />
        </div>
        <div class="item-section item-sizes">
          <div class="title">Размер</div>
          <URadioGroup
            v-model="size"
            :options="sizes"
            optionAttribute="name"
            valueAttribute="id"
            class="radio-options"
          />
        </div>
        <div
          class="item-section item-topings"
          v-if="pizza.avalible_topings.length > 0 && topings"
        >
          <div class="title">Вы можете добавить</div>
          <div class="topings">
            <div
              v-for="toping of topings"
              :key="toping.id"
              @click="selectToping(toping.id)"
              class="toping"
              :class="{ active: isSelectToping(toping.id) }"
            >
              <img :src="`/topings/${toping.image}`" alt="" />
              <b>{{ toping.name }}</b>
              <br />+{{ toping.price }} руб
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Pizza, PizzaToping } from '@@/types/Pizza';
const route = useRoute();

const pizzaId = computed((): number => {
  return Number(route.params.id);
});

const { getPizzasById } = usePizzasStore();
const pizza = computed((): Pizza | null => {
  return getPizzasById(pizzaId.value);
});

// ingredients
const { getIngredientsByArrayId } = useIngredientsStore();

const ingredients = computed((): string | null => {
  if (pizza.value) {
    return getIngredientsByArrayId(pizza.value.ingridients)
      .map((item) => item.name)
      .join(', ');
  }
  console.warn(`Пицца с id ${route.params.id} не найдена`);
  return null;
});

// topings
const { getTopingsByArrayId } = useTopingsStore();
const topingsSelected = ref<number[]>([]);

const topings = computed((): PizzaToping[] | null => {
  if (pizza.value) {
    return getTopingsByArrayId(pizza.value.avalible_topings);
  }
  return null;
});

const selectToping = (id: number): void => {
  if (topingsSelected.value.includes(id)) {
    topingsSelected.value = topingsSelected.value.filter((item) => item !== id);
  } else {
    topingsSelected.value.push(id);
  }
};

const isSelectToping = (id: number): boolean => {
  return topingsSelected.value.includes(id);
};

const { sizes } = useSizesStore();
const { doughs } = useDoughsStore();

const size = ref('sm');
const dough = ref(1);

// calculate price
const { getPrice } = usePrice();
const price = computed((): number | null => {
  return getPrice(
    pizzaId.value,
    dough.value,
    size.value,
    topingsSelected.value,
  );
});

// cart
const { addItemToCart } = useCartStore();

const addToCart = (): void => {
  addItemToCart(
    pizzaId.value,
    dough.value,
    size.value,
    topingsSelected.value,
    1,
  );
};

useHead({
  title: pizza?.value?.name,
  meta: [{ name: 'description', content: 'Лучшая пицца' }],
});
</script>

<style lang="scss" scoped>
.item-name {
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 20px;
}

.item-view {
  display: flex;

  .image {
    width: 450px;
    flex-shrink: 0;
    margin-right: 50px;

    img {
      width: 500px;
    }
  }

  .item-variants {
    .title {
      font-weight: 600;
      margin-bottom: 15px;
    }

    .item-section {
      margin-bottom: 20px;
    }
  }

  .item-topings {
    .topings {
      display: flex;
      gap: 15px;

      .toping {
        text-align: center;
        padding-top: 15px;
        cursor: pointer;
        width: 90px;
        flex-shrink: 0;

        &.active {
          img {
            border-color: #ff9113;
          }
        }

        img {
          width: 90px;
          border: 1px solid #ddd;
          border-radius: 5px;
        }
      }
    }
  }
}
</style>
