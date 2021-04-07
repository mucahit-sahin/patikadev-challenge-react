export const addCard = (id, title, items, categoryId) => ({
  type: "ADD_CARD",
  payload: { id, title, items, categoryId },
});
export const updateCard = (id, title, items, categoryId) => ({
  type: "UPDATE_CARD",
  payload: { id, title, items, categoryId },
});
export const deleteCard = (id) => ({
  type: "DELETE_CARD",
  payload: id,
});
