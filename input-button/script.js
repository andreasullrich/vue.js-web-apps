Vue.createApp({
  data() {
    return {
      greeting: "Good Morning",
      isBlack: false,
    };
  },
  methods: {
    toggleBlack() {
      this.isBlack = !this.isBlack;
      this.greeting = this.isBlack ? "Good Night" : "Good Morning";
      document.title = this.greeting;
      document.body.classList.toggle("black", this.isBlack);
    },
  },
}).mount("#app");

/*
const btnb = document.querySelector("#btnTest");

btnb.addEventListener("click", function () {
  document.body.classList.toggle("black");

  if (document.title === "Good Morning") {
    document.title = "Good Night";
  } else {
    document.title = "Good Morning";
  }
});
*/
