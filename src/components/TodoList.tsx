import {todoAPI} from "../service/todoService";



const TodoList = () => {
    const {data: todos, error, isLoading} = todoAPI.useFetchAllTodoQuery(10)

    return (
        <div>
            {isLoading && <h1>Идет загрузка ...</h1>}
            {error && <h1>Произошла ошибка </h1>}
            {todos && todos.map(todo =>
            <div key={todo.id}>{todo.id} - {todo.title}</div>)}
        </div>
    );
};

export default TodoList;