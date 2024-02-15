import { useState } from "react";
import AddTodo from "../components/FormAddTodo";

interface Todo {
  text: string;
  complete: boolean;
}

const initialTodos: Todo[] = [
  {
    text: "Walk the dog",
    complete: false,
  },
  {
    text: "Write app",
    complete: true,
  },
];

const App = () => {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);

  const addTodo = (text: string) => {
    const newTodo = { text, complete: false };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (index: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo, i) =>
        i === index ? { ...todo, complete: !todo.complete } : todo
      )
    );
  };

  const removeTodo = (index: number) => {
    setTodos((prevTodos) => prevTodos.filter((_, i) => i !== index));
  };

  return (
    <div className="container">
      <h1>Todo</h1>
      <AddTodo addTodo={addTodo} />
      <div>
        {todos.map((todo, index) => (
          <article key={index}>
            <fieldset>
              <label htmlFor={`todo-${index}`}>
                <input
                  type="checkbox"
                  id={`todo-${index}`}
                  checked={todo.complete}
                  onChange={() => toggleTodo(index)}
                />
                {todo.text}
              </label>
            </fieldset>
            <button
              className="contrast"
              onClick={() => removeTodo(index)}
            >
              Remove
            </button>
          </article>
        ))}
      </div>
    </div>
  );
};
export default App;