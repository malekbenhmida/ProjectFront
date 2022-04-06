import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Form from "./components/form";
import Todolist from "./components/Todolist";
import Indicators from "./components/Indicators";
import Detail from "./components/Detail";
import './App.css';

const App = () => {

  const initialState = JSON.parse(localStorage.getItem("Todo")) || [];
  const [input, setInput] = useState("");
  const [Todo, setTodo] = useState(initialState);
  const [editTodo, setEditTodo] = useState(null);
  const [displayheader, setDisplayHeader] = useState('none');


  useEffect(() => {
    localStorage.setItem("Todo", JSON.stringify(Todo))
  }, [Todo])


  setTimeout(() => setDisplayHeader('block'), 3000)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<>
          <div className="container">
            <div className="app-wrapper">
              <div> <Header /></div>
              <div style={{ display: displayheader }}>
               
                <Indicators Todo={Todo} />
                <Form style={{ display: displayheader }}
                  input={input}
                  setInput={setInput}
                  Todo={Todo}
                  setTodo={setTodo}
                  editTodo={editTodo}
                  setEditTodo={setEditTodo}
                />

                <Todolist Todo={Todo} setTodo={setTodo} setEditTodo={setEditTodo} />
              </div>
            </div>
          </div >
        </>}></Route>
        <Route path="/hi"  element={<Todolist Todo={Todo} setTodo={setTodo} setEditTodo={setEditTodo} />}></Route>
        <Route path="/detail/:id"  element={<Detail Todo={Todo} />}></Route>

        <Route path="*"  element={<p>NOT FOUND</p>}></Route>

      </Routes>
    </BrowserRouter>

  )

}

export default App;
