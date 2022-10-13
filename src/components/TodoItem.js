import React, { useContext } from "react";
import Context from "../context";

export default function TodoItem({ todo: { title, completed, id }, index }) {
    const { toggleList, deleteItem } = useContext(Context);

    return (
        <li className='list'>
            <div className={`${completed ? 'done' : ''}`}>
                <input type='checkbox' checked={completed} onChange={toggleList.bind(null, id)}></input>
                <b>{index + 1}</b>&nbsp;{title}
            </div>
            <button className="btn-dlt" onClick={deleteItem.bind(null, id)}>X</button> 
        </li>
    )
};