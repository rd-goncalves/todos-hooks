import React, { useContext } from "react";
import EditTodoForm from "./EditTodoForm";
import useToggleState from "./hooks/useToggleState";
import { Delete, Edit } from "@material-ui/icons";
import {
  ListItem,
  ListItemText,
  Checkbox,
  IconButton,
  ListItemSecondaryAction,
} from "@material-ui/core";
import { TodosContext } from "./contexts/TodosContext";

export default function Todo({ id, task, completed }) {
  const { removeTodo, toggleTodo } = useContext(TodosContext);
  const [isEditing, toggleEditing] = useToggleState();

  return (
    <ListItem style={{ height: "64px" }}>
      {isEditing ? (
        <EditTodoForm id={id} task={task} toggleEditing={toggleEditing} />
      ) : (
        <>
          <Checkbox
            tabIndex={-1}
            checked={completed}
            onClick={() => toggleTodo(id)}
          />
          <ListItemText style={{ textDecoration: completed && "line-through" }}>
            {task}
          </ListItemText>
          <ListItemSecondaryAction>
            <IconButton aria-label="Delete" onClick={() => removeTodo(id)}>
              <Delete />
            </IconButton>
            <IconButton aria-label="Edit" onClick={toggleEditing}>
              <Edit />
            </IconButton>
          </ListItemSecondaryAction>
        </>
      )}
    </ListItem>
  );
}
