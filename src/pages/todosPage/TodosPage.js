import React from "react";
import Todo from "../../component/Todo";
import s from './todos.module.css'

function TodosPage() {
  const todos= ["todo 1", "todo 2", "todo 3"]
    return (
      <div className={s.container}>
        <h2 className={s.Main}>Todos</h2>
        <div className={s.todo}>{todos.map((todo,index)=>(<Todo key={index} todo={todo}/>))}</div>
      </div>
    );
  }

export default TodosPage