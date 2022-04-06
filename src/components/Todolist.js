import React,{useState}  from "react";
import {  useNavigate } from 'react-router-dom'

import swal from "sweetalert";


const Todolist = ({Todo, setTodo, setEditTodo}) => {
    const [seemore, setSeeMore] = useState(5)
    const navigate = useNavigate()

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
    const handleDelete = (items) => {
        swal({
            title: "Are you sure?",
            text: "Do you want to delete this Task ? ",
            icon: "warning",
            buttons: {
                cancel: {
                    text: "Cancel",
                    value: false,
                    visible: true,
                    className: "cancel_button_popup",
                    closeModal: true,
                },
                confirm: {
                    text: "Confirm",
                    value: true,
                    visible: true,
                    className: "confirm_button_popup",
                    closeModal: true
                }
            }
        })
            .then((willDelete) => {
                if (willDelete) {
                    setTodo(Todo.filter((Todo) => Todo.id !== items.id))

                    swal(`***${items.title.substring(0,10)}...*** is deleted.`, {
                        icon: "success",
                    });

                } 
            });
        
       
    }

    const seeMore = () => {
       setSeeMore(seemore + 5)
    }

    const taskDetails = (id) => {
        navigate(`/detail/${id}`)
    }
    return (
        <div>
           
                <table style={{display: Todo.length === 0 ? "none" : "block"}}>
                    <thead>
                    <tr>
                        <th>Tasks</th>
                        <th>Done</th>
                        <th>Edit</th>
                        <th>Delete</th>
                        <th>Detail</th>
                    </tr>
                    </thead>
                   
                    {Todo.slice(0, seemore).map((items) => (
                         <tbody>
                    <tr >
                        <td><p className={items.completed ? "completed" : "notyet"} >{items.title.substring(0,10)}{items.title.length > 10 ? "...":null}</p></td>
                        <td>
                            <i id={items.completed ? "done" : "notyet"}  className="fa fa-check-circle" onClick={() => handleComplete(items)}></i>
                        </td>
                        <td>
                            <i className="fa fa-edit" onClick={() => handleEdit(items)}></i>
                        </td>
                        <td>
                            <i className="fa-solid fa-trash-can" onClick={() => handleDelete(items)}></i>
                        </td>
                        <td>
                        <i className="fa-solid fa-eye" onClick={() => taskDetails(items.id)}></i>
                        </td>
                    </tr>
                    </tbody>
                    ))}
                </table>
                
                <button style={{display: Todo.length > 3 ? "block" : "none"}} className="btn btn-primary" onClick={()=>seeMore()}>See More</button>

            
        </div>
    );
};


export default Todolist;