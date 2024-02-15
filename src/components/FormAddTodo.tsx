import React, { useState } from "react"

interface Props {
  addTodo: (text: string) => void;
}

export const FormAddTodo = ({addTodo}: Props) => {

  const [text, setText] = useState("")

  const  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    const trimText = text.trim()
    if (!trimText) return
    addTodo(trimText)
    setText("")
  }
    
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="todo">
        Todo
        <input 
          type="text"
          id='todo' 
          placeholder='Ingrese todo'
          value={text}
          onChange={handleChange}
        />
      </label>
      <button type='submit'>Add todo</button>
    </form>
  )
}
