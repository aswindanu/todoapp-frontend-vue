import uniqueId from "lodash.uniqueid";

let store = {
  App: {
    ToDoItems: [
      { id: uniqueId("todo-"), label: "Learn Vue", done: false },
      {
        id: uniqueId("todo-"),
        label: "Create a Vue project with the CLI",
        done: true,
      },
      { id: uniqueId("todo-"), label: "Have fun", done: true },
      { id: uniqueId("todo-"), label: "Create a to-do list", done: false },
    ]
  },
  ToDoForm: {
    label: "",
  },
  ToDoItem: {
    isEditing: false,
  },
  ToDoItemEditForm: {
    newLabel: "",
  },
};
export default store;