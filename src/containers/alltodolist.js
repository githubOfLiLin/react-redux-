import { connect } from 'react-redux'
import TodoList from '../components/todoList'
import { toggleTodo, delTodo} from '../actions/index'

const mapStateToProps = state => ({
    todos: state.todos
  })
  const mapDispatchToProps = dispatch => ({
    toggleTodo: id => dispatch(toggleTodo(id)),
    delTodo:id=>dispatch(delTodo(id))
  })
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(TodoList)