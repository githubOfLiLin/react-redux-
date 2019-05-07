let nextTodoId = 0;
export const addTodo = text => ({
  type: "ADD_TODO",
  id: nextTodoId++,
  text
});
export const toggleTodo=(id)=>({
    type:"TOGGLE_TODO",
    id
})
export const delTodo=(id)=>({
type:"DEL_TODO",
id
})