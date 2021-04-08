const initialState = [
  {
    id: 1,
    title: "Todo 1",
    categoryId: 1,
    items: [
      { id: 1, item: "item1", completed: true },
      { id: 2, item: "item2", completed: false },
    ],
    editMode: false,
  },
  {
    id: 2,
    title: "Todo 2",
    categoryId: 1,
    items: [
      { id: 1, item: "item1", completed: true },
      { id: 2, item: "item2", completed: false },
    ],
    editMode: false,
  },
  {
    id: 3,
    title: "Todo 3",
    categoryId: 2,
    items: [
      { id: 1, item: "item1", completed: true },
      { id: 2, item: "item2", completed: false },
    ],
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
