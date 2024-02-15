import { useState } from "react"
import { FormAddTodo } from "./components/FormAddTodo";

interface Todo {
  text: string;
  complete: boolean;
}

const initialTodos = [
  {
    text: "lern react",
    complete: false
  },
  {
    text: "lern typescript",
    complete: true
  }
]

export const App = () => {

  const [todos, setTodos] = useState<Array<Todo>>(initialTodos)
  console.log(initialTodos);
  const addTodo = ( text: string ) => {
    const newTodo = { 
      text,
      complete: false,
    };
    setTodos([...todos, newTodo])
  };


  const toggleTodo = (selectTodo: Todo) => {
    setTodos(prevoTodos => {
      return prevoTodos.map(todo => {
        if (todo === selectTodo) {
          return {
            ...todo,
            complete:!todo.complete
          }
        } 
        return todo
      })
    })
  }


  return (

    <div>
      <h1>Todos</h1>
      <FormAddTodo addTodo={addTodo}/>
      <div>
        {
          todos.map((todo) => (
            <article key={todo.text}>
              <label htmlFor="todo">
                <input 
                  type="checkbox"
                  checked={todo.complete}
                  id="todo"
                  onChange={()=>toggleTodo(todo)}
                />
                {todo.text}
              </label>

            </article>
          ))
        }
      </div>
    </div>
  )
}
