import { Button, Paper, TextField, Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { signUpAction, storeToken } from "../src/store/actions/authAction";

const SignUp = () => {
  const auth = useSelector((state) => state.auth);
  const router = useRouter();
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signUpAction(user));
    console.log("user details=========", user);
  };
  if (auth._id) {
    router.push("/");
  }
  return (
    <Paper
      elevation={3}
      sx={{
        width: "600px",
        margin: "10px auto",
      }}
    >
      <form onSubmit={handleSubmit}>
        <Box
          sx={{
            p: "40px 20px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TextField
            id="enter-name"
            label="Enter your username"
            variant="outlined"
            type="text"
            fullWidth
            sx={{ mt: "30px" }}
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
          />
          <TextField
            id="enter-email"
            label="Enter your email"
            variant="outlined"
            type="email"
            fullWidth
            sx={{ mt: "30px" }}
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
          <TextField
            id="enter-password"
            label="Enter your password"
            variant="outlined"
            type="password"
            fullWidth
            sx={{ mt: "30px" }}
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
          <Button
            variant="contained"
            type="submit"
            sx={{ width: "50%", mt: "30px" }}
          >
            Submit
          </Button>
        </Box>
      </form>
    </Paper>
  );
};

export default SignUp;
