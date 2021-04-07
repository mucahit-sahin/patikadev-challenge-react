import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";

import { checkedCategory } from "../../redux/actions/categoryActions";
import Card from "../Card/Card";
import CreateCard from "../CreateCard/CreateCard";
import "./Home.scss";

const Home = () => {
  let history = useHistory();
  if (!localStorage.getItem("user")) {
    history.push("/");
  }
  const dispatch = useDispatch();

  let cards = useSelector((state) => state.cards);
  let categories = useSelector((state) => state.categories);

  const [user, setUser] = React.useState("");
  const [filterCards, setFilterCards] = React.useState([]);

  const renderCards = () => {
    setFilterCards([]);
    categories.forEach((category) => {
      if (category.active) {
        cards.forEach((card) => {
          if (card.categoryId === category.id) {
            setFilterCards((oldcard) => [...oldcard, card]);
          }
        });
      }
    });
  };

  React.useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
    renderCards();
  }, []);

  React.useEffect(() => {
    renderCards();
  }, [cards]);

  return (
    <div className="profile">
      <div className="profileCol">
        <div className="header">
          <img
            src="https://www.attendit.net/images/easyblog_shared/July_2018/7-4-18/b2ap3_large_totw_network_profile_400.jpg"
            alt="profile"
          />
          <span>{user.name}</span>
        </div>
        <div className="categories">
          {categories.map((category) => (
            <div key={category.id}>
              <input
                type="checkbox"
                defaultChecked={category.active}
                id={`category${category.id}`}
                onChange={(e) => {
                  dispatch(checkedCategory(category.id, e.target.checked));
                  renderCards();
                }}
              />
              <label for={`category${category.id}`}>{category.name}</label>
            </div>
          ))}
        </div>
      </div>
      <div className="todoListCol">
        {filterCards.map((card) => (
          <Card key={card.id} card={card} />
        ))}
        <CreateCard />
      </div>
    </div>
  );
};

export default Home;
