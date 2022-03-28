import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { signOutAction } from "../store/actions/authAction";
import { clearTodo } from "../store/actions/todoAction";

export const NavBar = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const handleSignOut = () => {
    dispatch(signOutAction());
    dispatch(clearTodo());
    router.push("/signin");
  };

  return (
    <Box
      sx={{
        bgcolor: "primary.main",
        p: (5, 2),
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Box>
        <Link href="/">
          <Typography
            variant="h5"
            sx={{
              ml: 10,
              color: "primary.text",
              textDecoration: "none",
              "&:hover": { cursor: "pointer" },
            }}
          >
            Home
          </Typography>
        </Link>
      </Box>
      <Box>
        {auth._id ? (
          <Typography variant="h6" sx={{ color: "primary.text" }}>
            Logged in as {auth.name}
          </Typography>
        ) : (
          ""
        )}
      </Box>
      {auth._id ? (
        <Box>
          <Button
            onClick={handleSignOut}
            variant="contained"
            sx={{ bgcolor: "secondary.main" }}
          >
            SignOut
          </Button>
        </Box>
      ) : (
        <>
          <Box>
            <Link href="/signin">
              <Button variant="contained" sx={{ bgcolor: "secondary.main" }}>
                SignIn
              </Button>
            </Link>
          </Box>
          <Box>
            <Link href="/signup">
              <Button variant="contained" sx={{ bgcolor: "secondary.main" }}>
                SignUp
              </Button>
            </Link>
          </Box>
        </>
      )}
    </Box>
  );
};
