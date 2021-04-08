const initialState = [
  { id: 1, name: "Category 1", active: true },
  { id: 2, name: "Category 2", active: true },
];
function categoryReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_CATEGORY":
      return [...state, action.payload];
    case "CHECKED_CATEGORY":
      let index = state.findIndex((item) => item.id === action.payload.id);
      state[index].active = action.payload.checked;
      return state;
    default:
      return state;
  }
}
export default categoryReducer;
