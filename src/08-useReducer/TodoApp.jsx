import { TodoList } from "./TodoList"
import { TodoAdd } from "./TodoAdd"
import { useTodos } from "../hooks/useTodos"

const initialState = [
   /* {
        id: new Date().getTime(),
        description: 'Recolectar la piedra del alma',
        done: false,
    },*/
]


export const TodoApp = () => {

    const { todos, todosCount, pendingTodosCount, handleNewTodo, handleRemoveTodo, handleToggleTodo} = useTodos();

  return (
    <>
    <h1>TodoApp: {todosCount}, <small>pendientes:{pendingTodosCount}</small></h1>
    <hr/>

    <div className="row">
        <div className="col-5">
        <TodoList 
        todos={todos} 
        onDeleteTodo={handleRemoveTodo}
        onToggleTodo={handleToggleTodo}/>
        </div>

        <div className="col-5"></div>
        <h4>Agregar TODO</h4>
        <hr/>
        
       <TodoAdd onNewTodo={handleNewTodo}/>


    </div>
    </>
  )
}