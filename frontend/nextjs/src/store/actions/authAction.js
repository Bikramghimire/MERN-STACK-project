import axios from "axios";
import { url } from "../../api";
import { toast } from "react-toastify";

export const signUpAction = (user) => {
  const notify = (message) => toast(message);
  return (dispatch, getState) => {
    axios
      .post(`${url}/signup`, user)
      .then((token) => {
        localStorage.setItem("token", token.data);
        console.log("token=========", token.data);
        dispatch({
          type: "SIGN_UP",
          payload: token,
        });
      })
      .catch((err) => {
        console.log("error=======", err);
        // toast.error(err, {
        //   position: toast.POSITION.BOTTOM_RIGHT,
        // });
      });
  };
};

export const storeToken = () => {
  return (dispatch) => {
    dispatch({
      type: "STORE_TOKEN",
    });
  };
};

export const signInAction = (creds) => {
  return (dispatch, getState) => {
    axios
      .post(`${url}/signin`, creds)
      .then((token) => {
        localStorage.setItem("token", token.data);
        dispatch({
          type: "SIGN_IN",
          payload: token,
        });
      })
      .catch((err) => {
        console.log("error=======", err);
        // toast.error(err, {
        //   position: toast.POSITION.BOTTOM_RIGHT,
        // });
      });
  };
};

export const signOutAction = () => {
  return (dispatch) => {
    dispatch({
      type: "SIGN_OUT",
    });
  };
  notify("signing out user !");
};
