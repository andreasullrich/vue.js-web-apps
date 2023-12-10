const app = Vue.createApp({
  data() {
    return {
      apiUrl: "http://localhost:4730/todos",
      newArray: [],
      newTodo: "",
      filter: "all",
    };
  },
  created() {
    this.getDatafromApi();
  },
  methods: {
    getDatafromApi() {
      fetch(this.apiUrl)
        .then((response) => response.json())
        .then((data) => {
          this.newArray = data;
        })
        .catch((error) => console.error("API Error", error));
    },
    isDuplicate(description) {
      return this.newArray.some(
        (todo) => todo.description.toLowerCase() === description.toLowerCase()
      );
    },
    addTodo() {
      const inputtext = this.newTodo.trim();
      if (inputtext !== "" && !this.isDuplicate(inputtext)) {
        this.newTodo = "";

        fetch(this.apiUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            description: inputtext,
            checkbox: false,
            done: false,
          }),
        })
          .then((response) => response.json())
          .then((newTodo) => {
            this.newArray.push(newTodo);
          });
      }
    },
    updateTodo(todo) {
      const todoID = todo.id;
      fetch(`${this.apiUrl}/${todoID}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          done: todo.done,
          description: todo.description,
        }),
      })
        .then((response) => response.json())
        .then((updatedTodo) => {
          console.log("Updated Todo:", updatedTodo);
        });
    },
    removeDoneTodos() {
      const doneTodos = this.newArray.filter((todo) => todo.done);

      const deletetodo = doneTodos.map((todo) =>
        fetch(`${this.apiUrl}/${todo.id}`, {
          method: "DELETE",
        })
      );

      Promise.all(deletetodo)
        .then(() => {
          this.getDatafromApi();
        })
        .catch((error) => console.error("Error deleting todos:", error));
    },
  },
  computed: {
    filteredTodos() {
      if (this.filter === "open") {
        return this.newArray.filter((todo) => !todo.done);
      } else if (this.filter === "done") {
        return this.newArray.filter((todo) => todo.done);
      } else {
        return this.newArray;
      }
    },
  },
});

app.mount("#app");
