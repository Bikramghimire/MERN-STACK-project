import * as React from "react";
import Box from "@mui/material/Box";
import { AddTodo } from "../src/addtodos/AddTodo";
import ListTodos from "../src/listtodos/ListTodos";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { storeToken } from "../src/store/actions/authAction";

import { useRouter } from "next/router";

export default function Index() {
  const router = useRouter();
  const auth = useSelector((state) => state.auth);
  React.useEffect(() => {
    if (!auth._id) {
      router.push("/signup");
    }
  }, [auth]);

  const [todo, setTodo] = React.useState({
    name: "",
    isComplete: false,
  });
  const dispatch = useDispatch();
  React.useEffect(async () => {
    dispatch(storeToken());
  }, []);
  return (
    <Box sx={{ width: 500, margin: "10px auto" }}>
      <AddTodo todo={todo} setTodo={setTodo} />
      <ListTodos todo={todo} setTodo={setTodo} />
    </Box>
  );
}
