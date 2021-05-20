import React from "react";
import TodoList from "./TodoList";
import { Provider } from "react-redux";
import store from "./Store";
import "./App.css";

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <TodoList />
      </Provider>
    </div>
  );
};

export default App;
