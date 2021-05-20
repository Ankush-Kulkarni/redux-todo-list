import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, removeAll } from "./Actions/index";

const TodoList = () => {
  const [item, setItem] = useState("");
  const dispatch = useDispatch();
  const list = useSelector((state) => state.todoReducer.list);

  const handleChange = (event) => {
    console.log(event.target.value);
    setItem(event.target.value);
  };

  const handleClick = () => {
    if (!item) {
      alert("Enter item name");
    } else {
      dispatch(addTodo(item));
      setItem("");
    }
  };

  return (
    <div className="todo_container">
      <h1>Todo List</h1>
      <input
        type="text"
        placeholder="enter items"
        onChange={handleChange}
        value={item}
      />
      <button onClick={handleClick}>Add</button>
      <ol>
        {list.map((val) => {
          return (
            <div className="list_items" key={val.id}>
              <li>{val.data}</li>
              <i
                className="fas fa-trash fa-sm"
                onClick={() => dispatch(deleteTodo(val.id))}
              />
            </div>
          );
        })}
      </ol>
      <button onClick={() => dispatch(removeAll())}>Remove all</button>
    </div>
  );
};

export default TodoList;
