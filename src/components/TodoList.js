import React from "react";
import TodoItem from "./TodoItem";

const style = {
    ul: {
      listStyle: 'none',
      padding: 0,
      margin: 0
    },
};

export default function TodoList({ todos }) {
    return (
        <ul style={style.ul}>
            {todos.map((todo, i) => <TodoItem todo={todo} key={todo.id} index={i} />)}
        </ul>
    )
}