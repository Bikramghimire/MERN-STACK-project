import { Box, Button, ButtonGroup, Typography } from "@mui/material";
import React from "react";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Moment from "react-moment";
import { useDispatch } from "react-redux";
import { checkTodo, deleteTodo } from "../store/actions/todoAction";

export const Todo = ({ todoData, setTodo }) => {
  const dispatch = useDispatch();
  const handleEdit = (e) => {
    setTodo(todoData);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  const handleCheck = (id) => {
    dispatch(checkTodo(id));
  };
  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };
  return (
    <Box
      sx={{
        border: "1px solid #bbbbbb",
        borderRadius: "5px",
        mt: "10px",
        p: "20px 10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Box>
        {todoData.isComplete ? (
          <Typography variant="h6" sx={{ textDecoration: "line-through" }}>
            {todoData.name}
          </Typography>
        ) : (
          <Typography variant="h6">{todoData.name}</Typography>
        )}

        <Typography variant="body2">
          <Moment local>{todoData.createdAt}</Moment>
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <ButtonGroup>
          <Button>
            <DeleteIcon
              color="error"
              onClick={() => handleDelete(todoData._id)}
            />
          </Button>
          <Button onClick={() => handleEdit()}>
            <CreateIcon color="secondary" />
          </Button>
          <Button onClick={() => handleCheck(todoData._id)}>
            {todoData.isComplete ? (
              <CheckCircleIcon />
            ) : (
              <CheckCircleIcon sx={{ color: "#8f8f8f" }} />
            )}
          </Button>
        </ButtonGroup>
      </Box>
    </Box>
  );
};
