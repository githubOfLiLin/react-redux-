import React from "react";
import PropTypes from "prop-types";
import  "./todo.css"
const Todo =({completed,onChange,text,onDel})=>(
    <div className="todo">
        <input className="todo-toggle" type="checkbox" checked={completed} onChange={onChange}></input>
    <p className="todo-text">{text}</p>
    <span className="todo-del" onClick={onDel}>x</span>
        </div>
)
Todo.propTypes={
    completed:PropTypes.bool.isRequired,
    onChange:PropTypes.func.isRequired,
    text:PropTypes.string.isRequired,
    onDel:PropTypes.func.isRequired
}
export default Todo;