import React from "react";
import PropTypes from "prop-types";
import Todo from "./todo";


const getTwoTodos = (check, todos) => {
  let comTodos;
    comTodos= todos.filter(todo => {
      return todo.completed == check;
    });
    return comTodos;
};

const TodoList = ({ todos,toggleTodo,delTodo}) => {
  const comTodos = getTwoTodos(true, todos);
  const uncomTodos = getTwoTodos(false, todos);
  console.log(todos);
  return (
    <div>
      <div>
        <h1>已完成</h1>
        <ul>
        {comTodos.map(todo => (
          <Todo key={todo.id} {...todo} onChange={()=>toggleTodo(todo.id)} onDel={()=>delTodo(todo.id)}/>
        ))}
        </ul>
      </div>
      <div>
        <h1>正在进行</h1>
        <ul>
        {uncomTodos.map(todo => (
           <Todo key={todo.id} {...todo} onChange={()=>toggleTodo(todo.id)} onDel={()=>delTodo(todo.id)}/>
        ))}
        </ul>
      </div>
    </div>
  );
};

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  toggleTodo:PropTypes.func.isRequired,
  delTodo:PropTypes.func.isRequired
};
export default TodoList;