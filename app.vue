<template>
  <div class="wrapper">
    <LayoutHeader />
    <div class="slider">
      <img src="/slider/slide-1.jpg" alt="" />
    </div>
    <main>
      <NuxtPage />
    </main>
    <LayoutFooter />
  </div>
  <div></div>
</template>

<script setup lang="ts">
const { fetchPizzas } = usePizzasStore();
const { fetchIngredients } = useIngredientsStore();
const { fetchSizes } = useSizesStore();
const { fetchDoughs } = useDoughsStore();
const { fetchTopings } = useTopingsStore();

fetchPizzas();
fetchIngredients();
fetchSizes();
fetchDoughs();
fetchTopings();
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: #ffb663;
  font-family: "PT Sans", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 14px;
}

h1 {
  font-size: 24px;
  margin-bottom: 30px;
}

a {
  color: #999;
}
.wrapper {
  background-color: #fff;
  width: 960px;
  margin: 50px auto;
  padding: 30px;
  border-radius: 10px;

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;
    box-shadow: 0 0 5px #ddd;
    border-radius: 5px;
    margin-bottom: 30px;

    .logo {
      margin-right: 30px;
      font-size: 20px;
      font-weight: 600;
    }

    .menu {
      ul {
        list-style: none;
        display: flex;
        gap: 25px;
      }
    }

    .search {
      input {
        width: 250px;
        background-color: #f2f2f2;
        border: none;
        border-radius: 15px;
        padding: 6px 12px;
        outline: none;
        font-family: inherit;
      }
    }
  }

  .slider {
    margin-bottom: 30px;
    background-color: #eee;
    height: 250px;
    border-radius: 10px;

    img {
      border-radius: 10px;
    }
  }
}
</style>
