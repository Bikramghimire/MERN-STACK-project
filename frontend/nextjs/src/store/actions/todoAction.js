import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { setHeaders, url } from "../../api";
export const addTodo = (todo) => {
  const notify = (message) => toast(message);
  return (dispatch, getState) => {
    const author = getState().auth.name;
    const uid = getState().auth._id;
    <button onClick={notify}>Notify !</button>;
    axios
      .post(`${url}/todos`, { ...todo, author, uid }, setHeaders())
      .then((todo) => {
        dispatch({
          type: "ADD_TODO",
          payload: todo,
        });
      })
      .catch((err) => {
        const message = err.response?.data.message;
        console.log("error=======", err.response?.data);
        notify(message);
      });
  };
};

export const getTodo = () => {
  return (dispatch) => {
    axios
      .get(`${url}/todos`, setHeaders())
      .then((todos) => {
        dispatch({
          type: "GET_TODOS",
          payload: todos,
        });
      })
      .catch((error) => console.log(error.response?.data));
  };
};

export const updateTodo = (updateTodo, id) => {
  return (dispatch) => {
    axios
      .put(`${url}/todos/${id}`, updateTodo, setHeaders())
      .then((todo) => {
        dispatch({
          type: "UPDATE_TODO",
          payload: todo,
        });
      })
      .catch((error) => toast.error(error.response.data));
  };
};

export const checkTodo = (id) => {
  return (dispatch) => {
    axios
      .patch(`${url}/todos/${id}`, {}, setHeaders())
      .then((todo) => {
        dispatch({
          type: "CHECK_TODO",
          payload: todo,
        });
      })
      .catch((error) => console.log(error));
  };
};

export const deleteTodo = (id) => {
  return (dispatch) => {
    axios
      .delete(`${url}/todos/${id}`, setHeaders())
      .then(() => {
        dispatch({
          type: "DELETE_TODO",
          id,
        });
      })
      .catch((error) => console.log(error));
  };
};

export const clearTodo = () => {
  return (dispatch) => {
    dispatch({
      type: "CLEAR_TODO",
    });
  };
};
