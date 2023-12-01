Vue.createApp({
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    increaseCount() {
      this.count++;
    },
  },
}).mount("#app");
