import React from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { deleteCard, updateCard } from "../../redux/actions/cardActions";
import { Delete } from "../icons";
import "./Card.scss";

const Card = ({ card, category }) => {
  const dispatch = useDispatch();
  const [editMode, setEditMode] = React.useState(false);
  const [title, setTitle] = React.useState(card.title);
  const [items, setItems] = React.useState(card.items);
  const [item, setItem] = React.useState("");
  React.useEffect(() => {
    if (card.title === "") {
      setEditMode(true);
    }
  }, [card]);
  const addItem = () => {
    if (item !== "") {
      setItems([...items, { id: uuidv4(), item: item, completed: false }]);
      setItem("");
    }
  };
  const removeItem = (id) => {
    setItems((items) => items.filter((itm) => itm.id !== id));
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
        <div className="category">
          <span>Category: {category.name}</span>
        </div>
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
          {items.map((item) => (
            <div key={item.id} className="item">
              <input
                type="checkbox"
                defaultChecked={item.completed}
                onChange={(e) => {
                  let index = items.findIndex((itm) => itm.id === item.id);
                  items[index].completed = e.target.checked;
                  setItems(items);
                }}
              />
              <span>{item.item}</span>
              <button onClick={() => removeItem(item.id)}>-</button>
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
      <div className="category">
        <span>Category: {category.name}</span>
      </div>
      <div className="checkboxs">
        {items.map((item) => (
          <div key={item.id} className="checkbox">
            <input
              type="checkbox"
              id={title + item.id}
              defaultChecked={item.completed}
            />
            <label for={title + item.id}>{item.item}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
