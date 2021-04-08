import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCard } from "../../redux/actions/cardActions";
import { v4 as uuidv4 } from "uuid";
import "./CreateCard.scss";
import { addCategory } from "../../redux/actions/categoryActions";

const CreateCard = () => {
  const [category, setCategory] = React.useState("");
  const dispatch = useDispatch();
  let categories = useSelector((state) => state.categories);
  const createCard = () => {
    if (category !== "") {
      let cat = categories.find((ctgry) => ctgry.name === category);
      if (cat) {
        dispatch(addCard(uuidv4(), "", [], cat.id));
      } else {
        let id = uuidv4();
        dispatch(addCategory(id, category, true));
        dispatch(addCard(uuidv4(), "", [], id));
      }
      setCategory("");
    }
  };
  return (
    <div className="create">
      <div className="title">
        <span>New Project</span>
      </div>
      <div className="categoryInput">
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
      </div>
      <button onClick={() => createCard()}>Create</button>
    </div>
  );
};

export default CreateCard;
