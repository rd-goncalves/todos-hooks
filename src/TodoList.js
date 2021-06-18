import React, { useContext } from "react";
import Todo from "./Todo";
import { Paper, List, Divider } from "@material-ui/core";
import { TodosContext } from "./contexts/TodosContext";

export default function TodoList() {
  const todos = useContext(TodosContext);

  if (todos.length) {
    return (
      <Paper>
        <List>
          {todos.map((todo, idx) => (
            <>
              <Todo {...todo} key={todo.id} />
              {idx < todos.length - 1 && <Divider />}
            </>
          ))}
        </List>
      </Paper>
    );
  }
  return null;
}
