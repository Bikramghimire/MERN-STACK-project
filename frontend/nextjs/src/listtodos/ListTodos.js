import { Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { Todo } from "../todos/todo";
import { useDispatch, useSelector } from "react-redux";
import { getTodo } from "../store/actions/todoAction";

const ListTodos = ({ todo, setTodo }) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.todos);
  console.log("state=========", state);
  useEffect(() => {
    dispatch(getTodo());
  }, [dispatch]);
  return (
    <Paper elevation={3} sx={{ mt: "20px" }}>
      <Box sx={{ p: "20px" }}>
        <Typography variant="h5">Todos</Typography>
        {state
          ? state.map((item) => (
              <Todo key={item._id} todoData={item} setTodo={setTodo} />
            ))
          : ""}
      </Box>
    </Paper>
  );
};

export default ListTodos;
