const initialState = [
  {
    id: 1,
    title: "1",
    categoryId: 1,
    items: ["fdds", "dgds"],
    editMode: false,
  },
  {
    id: 2,
    title: "111",
    categoryId: 1,
    items: ["fdfds", "ddsfgds"],
    editMode: false,
  },
  {
    id: 3,
    title: "11441",
    categoryId: 2,
    items: ["fds", "ddfsgds"],
    editMode: false,
  },
];
function cardReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_CARD":
      return [...state, action.payload];
    case "UPDATE_CARD":
      let index = state.findIndex((item) => item.id === action.payload.id);
      state[index] = action.payload;
      console.log(state);
      return state;
    case "DELETE_CARD":
      let arr = state.filter((item) => item.id !== action.payload);
      return arr;
    default:
      return state;
  }
}
export default cardReducer;
