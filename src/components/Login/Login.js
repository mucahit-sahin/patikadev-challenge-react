import React from "react";
import { useHistory } from "react-router";
import "./Login.scss";

const Login = () => {
  let history = useHistory();
  if (localStorage.getItem("user")) {
    history.push("/home");
  }

  const [name, setName] = React.useState("");
  const [surname, setSurname] = React.useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify({ name, surname }));
    history.push("/home");
  };

  return (
    <div className="loginContainer">
      <div className="login">
        <form onSubmit={(e) => onSubmit(e)}>
          <div className={`inputRow ${name.length > 0 && "active"}`}>
            <input
              id="name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label for="name">Name</label>
          </div>
          <div className={`inputRow ${surname.length > 0 && "active"}`}>
            <input
              id="surname"
              type="text"
              required
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
            />
            <label for="surname">Surname</label>
          </div>
          <input type="submit" className="loginBt" />
        </form>
      </div>
    </div>
  );
};

export default Login;
