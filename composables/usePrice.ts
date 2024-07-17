export const usePrice = () => {
  const getPriceToping = (id: number): number => {
    const { topings } = useTopingsStore();
    if (topings) {
      const toping = topings.find((item) => item.id === id);
      if (toping) {
        return toping.price;
      }
    }
    return 0;
  };

  const getPrice = (
    id: number,
    dough: number,
    size: string,
    topings: number[] = [],
  ) => {
    const { getPizzasById } = usePizzasStore();
    const pizza = getPizzasById(id);

    if (pizza) {
      const variant = pizza.variants.find(
        (item) => item.dough === dough && item.size === size,
      );
      if (variant) {
        const priceToppings = topings.reduce(
          (sum: number, topingId: number) => {
            return sum + getPriceToping(topingId);
          },
          0,
        );
        return variant.price + priceToppings;
      }
    }
    return 0;
  };

  return { getPrice };
};
