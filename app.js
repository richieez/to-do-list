const app = Vue.createApp({
  data() {
    return {
      columns: ["No.", "Task", "Action"],
      tasks: [
        {
          list: "",
        },
      ],
    };
  },

  methods: {
    checkIndex(index) {
      if (index === 0) {
        return false;
      } else {
        return true;
      }
    },
    addList() {
      this.tasks.push({
        list: this.list,
      });

      this.list = "";
    },
    clickEdit(idx) {
      number = idx;
      return number;
    },
    editList() {
      index = number;
      this.tasks.splice(
        index,
        1,
        (this.tasks[index] = {
          list: this.list,
        })
      );

      this.list = "";
    },
    deleteList(index) {
      this.tasks.splice(index, 1);
    },
  },
});

app.mount("#toDoList");
