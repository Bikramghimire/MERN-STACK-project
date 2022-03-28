import { Box, Button, ButtonGroup, Paper, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, updateTodo } from "../store/actions/todoAction";

export const AddTodo = ({ todo, setTodo }) => {
  const dispatch = useDispatch();

  const handleForm = (e) => {
    e.preventDefault();
    if (todo._id) {
      const id = todo._id;
      const updateTodoData = {
        name: todo.name,
        isComplete: todo.isComplete,
        author: todo.author,
      };
      dispatch(updateTodo(updateTodoData, id));
    } else {
      dispatch(addTodo(todo));
    }

    setTodo({
      name: "",
      isComplete: false,
    });
  };
  return (
    <Paper
      elevation={3}
      sx={{
        width: "500px",
        height: "100px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box>
        <form onSubmit={handleForm}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <TextField
              id="outlined-basic"
              label="Add Todos"
              variant="outlined"
              value={todo.name}
              onChange={(e) =>
                setTodo({
                  ...todo,
                  name: e.target.value,
                })
              }
              sx={{ width: "400px" }}
            />
            <ButtonGroup sx={{ ml: "10px" }}>
              <Button type="submit">
                <SendIcon fontSize="large" color="secondary" />
              </Button>
            </ButtonGroup>
          </Box>
        </form>
      </Box>
    </Paper>
  );
};
