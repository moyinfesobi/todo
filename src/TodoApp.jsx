import { useState, useEffect } from "react";


const getInitialTodos = () => {
  const savedTodos = localStorage.getItem("todos");
  return savedTodos ? JSON.parse(savedTodos) : [];
};


const TodoApp = () => {
  const [todos, setTodos] = useState(getInitialTodos);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);


  const addTodo = () => {
    if (inputValue.trim()) {
      setTodos([...todos, { text: inputValue, completed: false }]);
      setInputValue("");
    }
  };

  const toggleComplete = (index) => {
    const newTodos = todos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(newTodos);
  };
  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };
  
  return (
    <>
      {" "}
      <div className="todo-app">
        {" "}
        <h1>Todo List</h1>{" "}
        <div className="input-container">
          {" "}
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />{" "}
          <button className="add-button" onClick={addTodo}>
            Add
          </button>{" "}
        </div>{" "}
        <ul>
          {" "}
          {todos.map((todo, index) => (
            <li key={index} className={todo.completed ? "completed" : ""}>
              {" "}
              <span onClick={() => toggleComplete(index)}>
                {todo.text}
              </span>{" "}
              <button onClick={() => deleteTodo(index)}>Delete</button>{" "}
            </li>
          ))}{" "}
        </ul>{" "}
      </div>{" "}
    </>
  );
};
export default TodoApp;
