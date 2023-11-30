Vue.createApp({
  data() {
    return {
      users: [
        {
          username: "David",
          status: "online",
          lastActivity: 10,
        },
        {
          username: "Lucy",
          status: "offline",
          lastActivity: 22,
        },
        {
          username: "Bob",
          status: "online",
          lastActivity: 104,
        },
      ],
    };
  },
  methods: {
    getStatus(user) {
      if (user.status === "online" && user.lastActivity <= 10) {
        return "green";
      } else if (user.status === "online" && user.lastActivity > 10) {
        return "yellow";
      } else if (user.status === "offline") {
        return "red";
      }
    },
  },
}).mount("#app");
