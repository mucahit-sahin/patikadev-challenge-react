import React from "react";
import { useDispatch } from "react-redux";
import { deleteCard, updateCard } from "../../redux/actions/cardActions";
import { Delete } from "../icons";
import "./Card.scss";

const Card = ({ card }) => {
  const dispatch = useDispatch();
  const [editMode, setEditMode] = React.useState(false);
  const [title, setTitle] = React.useState(card.title);
  const [items, setItems] = React.useState(card.items);
  const [item, setItem] = React.useState("");
  React.useEffect(() => {
    if (card.title === "") {
      setEditMode(true);
    }
  }, []);
  const addItem = () => {
    if (item !== "") {
      setItems([...items, item]);
      setItem("");
    }
  };
  const savedCard = () => {
    if (title !== "") {
      dispatch(updateCard(card.id, title, items, card.categoryId));
      setEditMode(false);
    }
  };
  if (editMode) {
    return (
      <div className="card">
        <button
          onClick={() => dispatch(deleteCard(card.id))}
          className="deleteBt"
        >
          <Delete />
        </button>
        <button onClick={() => savedCard()} className="saveBt">
          Save
        </button>
        <div className="createTitle">
          <input
            type="text"
            placeholder="Card Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="addItemInput">
          <input
            type="text"
            placeholder="Item"
            value={item}
            onChange={(e) => setItem(e.target.value)}
          />
          <button onClick={() => addItem()}>+</button>
        </div>
        <div className="items">
          {items.map((item, idx) => (
            <div key={idx} className="item">
              <input type="checkbox" />
              <span>{item}</span>
              <button>Delete</button>
            </div>
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className="card">
      <div className="settings">
        <button onClick={() => setEditMode(true)}>Update</button>
        <button onClick={() => dispatch(deleteCard(card.id))}>Delete</button>
      </div>
      <div className="title">{title}</div>
      <div className="checkboxs">
        {items.map((item, index) => (
          <div key={index} className="checkbox">
            <input type="checkbox" id={title + index} />
            <label for={title + index}>{item}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
