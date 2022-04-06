import React from "react";

const Indicators = ({Todo}) => {
    
    const count =  Todo.filter(item=>{
        if(item.completed === true){
            return  item
        }
    })
   

    return (
           <div className={Todo.length === 0 ? "hideindicators" : "indicators"}>
            <p className="tasks_count">Tasks : {Todo.length} </p>
            <p className="tasks_count">To Do : {Todo.length - count.length} </p>
            <p className="tasks_count">Done : {count.length} </p>
            </div>
            )
}


export default Indicators;