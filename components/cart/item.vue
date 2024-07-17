<template>
  <div class="item">
    <div class="item-image">
      <img :src="`/main/${pizza?.image}`" :alt="pizza?.name" />
    </div>
    <div class="item-body">
      <div class="name">{{ pizza?.name }}</div>
      <div class="dought">Тесто: {{ dough?.name }}</div>
      <div class="size">Размер: {{ size?.name }}</div>
    </div>
    <div class="item-topings" v-if="topings.length > 0">
      <div class="title">Добавки</div>
      {{ topings }}
    </div>

    <div class="item-count">
      <UInput
        type="number"
        min="1"
        :value="item.count"
        @input="(event: any) => updateCountItem(cartId, event.target.value)"
      />
    </div>
    <div class="item-price">x {{ item.price }} руб</div>
    <div class="item-action">
      <UButton @click="removeItemFromCart(cartId)">Удалить</UButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Pizza, PizzaDough, PizzaSize, PizzaToping } from '@@/types/Pizza';
import type { CartItem } from '@@/types/Cart';
const { item, cartId } = defineProps<{ item: CartItem; cartId: string }>();

const { getPizzasById } = usePizzasStore();
const pizza = computed((): Pizza | null => {
  return getPizzasById(item.id);
});

const { getDoughById } = useDoughsStore();
const dough = computed((): PizzaDough | null => {
  return getDoughById(item.dough);
});

const { getSizeById } = useSizesStore();
const size = computed((): PizzaSize | null => {
  return getSizeById(item.size);
});

const { removeItemFromCart, updateCountItem } = useCartStore();

const { getTopingsByArrayId } = useTopingsStore();
const topings = computed((): string => {
  return getTopingsByArrayId(item.topings)
    .map((item) => item.name)
    .join(', ');
});
</script>

<style scoped lang="scss">
.item {
  display: flex;
  border-bottom: 1px solid #ddd;
  padding: 20px 0;
  align-items: center;
  justify-content: space-between;
  gap: 20px;

  .item-image {
    margin-right: 30px;

    img {
      width: 80px;
    }
  }

  .item-body {
    flex-grow: 1;

    .name {
      font-size: 16px;
      font-weight: 600;
    }
  }

  .item-topings {
    width: 200px;

    .title {
      font-weight: 600;
    }
  }

  .item-count {
    width: 70px;
  }
}
</style>
