import {todoAPI} from "../service/todoService";
import Loader from "./Loader/Loader";




const TodoList = () => {
    const {data: todos, error, isLoading} = todoAPI.useFetchAllTodoQuery(10)

    return (
        <div>
            {isLoading && <Loader width='140px' height='140px'/>}
            {error && <h1>Произошла ошибка </h1>}
            {todos && todos.map(todo =>
            <div key={todo.id}>{todo.id} - {todo.title}</div>)}
        </div>
    );
};

export default TodoList;