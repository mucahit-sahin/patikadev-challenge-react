const initialState = [
  { id: 1, name: "All", active: true },
  { id: 2, name: "caa", active: true },
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
