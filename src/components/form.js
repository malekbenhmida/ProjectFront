import React, {useEffect} from "react";
import {v4 as uuidV4} from "uuid";

const Form = ({input, setInput, Todo, setTodo, editTodo, setEditTodo }) => {


    const updateTodo = (title, id, completed) => {
        const newTodo = Todo.map((Todo) => 
            Todo.id === id ? {title, id, completed} : Todo
        )
        setTodo(newTodo)
        setEditTodo("")
    }

    useEffect(() => {
        if(editTodo){
            setInput(editTodo.title)
        } else {
            setInput("")
        }
    }, [setInput, editTodo])


    const onInputChange = (event) => {
        setInput(event.target.value);
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        if(!editTodo){
            setTodo([...Todo, {id: uuidV4(), title: input, completed: false}]);
            setInput("");

        } else {
            updateTodo(input, editTodo.id, editTodo.completed)
        }

    };
    return (
        <form onSubmit={onFormSubmit} id="input_data">
            <input type="text" placeholder="Enter a task" className="task-input" value={input} required onChange={onInputChange}/>
            <button className="button-add" type="submit">
                {editTodo ? <i class="fa-solid fa-pen-to-square"></i> : <i class="fa-solid fa-circle-plus"></i>}
            </button>
        </form>
    )
}

export default Form;