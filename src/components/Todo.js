import React, { useState } from "react";
import { addTodo, deleteTodo, removeTodo } from "../actions/index";
import {useDispatch, useSelector} from "react-redux";

export default function Todo() {

    const [input, setInput] = useState();
    const list = useSelector((state) => state.todoReducers.list)
    const dispatch = useDispatch();

  return (
    <div>
      <h1>Add Your Task</h1>
      <div>
        <input type="text" value={input} onChange = {(e) => setInput(e.target.value)}></input>
        <button onClick={() => dispatch(addTodo(input))}>Add Item</button>

        <div>
            {list.map((e) => {
                return (
                    <div key = {e.id}>
                        <p>{e.data}</p>
                        <button onClick={() => dispatch(deleteTodo(e.id))}>Delete Item</button> 
                    </div>
                )
            })}
        </div>
        <button onClick={() => dispatch(removeTodo())}>Remove All Item</button> 
      </div>
    </div>
  );
}

