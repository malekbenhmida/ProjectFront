import React from "react";

const Todolist = ({Todo, setTodo, setEditTodo}) => {

    const handleComplete = (items) => {
        setTodo(
            Todo.map((item) =>{
                if(item.id === items.id) {
                    return {...item, completed: !item.completed }
                }
                return item;
            })
        )
    }

    const handleEdit =  ({id}) => {
        const findTodo = Todo.find((Todo) => Todo.id === id);
        setEditTodo(findTodo);
    }
    const handleDelete = ({id}) => {
        setTodo(Todo.filter((Todo) => Todo.id !== id))
    }
    return (
        <div>
            {Todo.map((items) => (
                <li className="list-item" key={items.id}>
                    <input type="text" value={items.title} className={`list ${items.completed ? "complete" : ""}`} onChange={(event) => event.preventDefault()} />
                    <div>
                        <button className="button-complete task-button" onClick={() => handleComplete(items)}>
                            <i className="fa fa-check-circle"></i>
                        </button>
                        <button className="button-edit task-button" onClick={() => handleEdit(items)}>
                            <i className="fa fa-edit"></i>
                        </button>
                        <button className="button-delete task-button" onClick={() => handleDelete(items)}>
                            <i className="fa fa-trash-o"></i>
                        </button>
                    </div>
                </li>

            ))}
        </div>
    );
};


export default Todolist;