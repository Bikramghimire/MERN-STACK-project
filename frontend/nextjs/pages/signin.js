import { Button, Paper, TextField, Box } from "@mui/material";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { signInAction } from "../src/store/actions/authAction";
import { getTodo } from "../src/store/actions/todoAction";

const SignIn = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [creds, setCreds] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("signUPvalu=======", creds);
    dispatch(signInAction(creds));
    router.push("/");
  };

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
            id="enter-email"
            label="Enter your email"
            variant="outlined"
            type="email"
            fullWidth
            sx={{ mt: "30px" }}
            value={creds.email}
            onChange={(e) => setCreds({ ...creds, email: e.target.value })}
          />
          <TextField
            id="enter-password"
            label="Enter your password"
            variant="outlined"
            type="password"
            fullWidth
            sx={{ mt: "30px" }}
            value={creds.password}
            onChange={(e) => setCreds({ ...creds, password: e.target.value })}
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

export default SignIn;
