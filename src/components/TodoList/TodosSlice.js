const initState = [
  { id: 1, name: "Learn ReactJS", completed: false, priority: "Medium" },
  { id: 2, name: "Learn Redux", completed: true, priority: "High" },
  { id: 3, name: "Learn JavaScript", completed: false, priority: "Low" },
];

const todoListReducer = (state = initState, action) => {
  // console.log({ state, action });
  // tach ra lam live reducer
  switch (action.type) {
    case "todoList/addTodo":
      return [...state, action.payload];
    default:
      return state;
  }
};

export default todoListReducer;
