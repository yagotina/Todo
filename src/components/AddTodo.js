import React, { useContext } from "react"
import Context from "../context";

export default function AddTodo() {
    const { addItem } = useContext(Context);

    return (
        <div className="add-todo">
            <input className="add-todo__input" type="text" id="newTodo"/>
            <button className="add-todo__btn" onClick={addItem}>Add todo</button>
        </div>
    )
};