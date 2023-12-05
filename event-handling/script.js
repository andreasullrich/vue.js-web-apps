Vue.createApp({
  data() {
    return {
      x: 12,
      y: 4,
      fruitBasket: [
        "🍏 Apple",
        "🍌 Banana",
        "🍉 Melon",
        "🫐 Blueberry",
        "🍓 Strawberry",
        "🍍 Ananas",
        "🥭 Mango",
      ],
    };
  },

  methods: {
    removeFruit(fruitremove) {
      this.fruitBasket = this.fruitBasket.filter((fruit) => {
        return fruit !== fruitremove;
      });
    },
  },
}).mount("#app");
