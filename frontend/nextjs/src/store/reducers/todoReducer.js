import jwtDecode from "jwt-decode";
const todoReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.payload.data];

    case "GET_TODOS":
      const token = localStorage.getItem("token");
      if (token) {
        const user = jwtDecode(token);
        return action.payload.data;
      } else {
        return [];
      }

    case "UPDATE_TODO":
      return state.map((item) =>
        item._id === action.payload.data._id ? action.payload.data : item
      );
    case "CHECK_TODO":
      return state.map((item) =>
        item._id === action.payload.data._id ? action.payload.data : item
      );
    case "DELETE_TODO":
      return state.filter((item) => item._id !== action.id);

    case "CLEAR_TODO":
      return [];

    default:
      return state;
  }
};
export default todoReducer;
