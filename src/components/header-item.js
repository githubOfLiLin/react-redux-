import React from "react";
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { addTodo } from '../actions/index'
const HeaderItem = ({dispatch}) => {
  let input=null;
  return (
    <div>
      <label>ToDoList</label>
      <input type="text" ref={node=>(input=node)} onChange={()=>{
        dispatch(addTodo(input!=null?input.value:""));
console.log(addTodo(input!=null?input.value:""));
      }}>
      </input>
    </div>
  );
}



export default connect()(HeaderItem);
