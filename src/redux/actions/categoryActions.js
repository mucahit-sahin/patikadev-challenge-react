export const addCategory = (id, name, active) => ({
  type: "ADD_CATEGORY",
  payload: { id, name, active },
});
export const checkedCategory = (id, checked) => ({
  type: "CHECKED_CATEGORY",
  payload: { id, checked },
});
