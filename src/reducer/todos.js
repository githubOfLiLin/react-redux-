
const todos=(state=[],action)=>{
switch (action.type)
{
    case "ADD_TODO":
    return [
        ...state,
        {
            text:action.text,
            id:action.id,
            completed:false
        }
    ]
    case "TOGGLE_TODO":
    return state.map((todo)=>(
        action.id==todo.id?{...todo,completed:!todo.completed}:todo
    )
    );
    case "DEL_TODO":
    {
    const a= [...state];
    a.splice(action.id,1);
        return a}
    default:
      return state
}
}

export default todos;