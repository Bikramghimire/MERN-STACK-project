import jwtDecode from "jwt-decode";
const initialState = {
  token: null,
  name: "",
  email: "",
  _id: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "STORE_TOKEN":
    case "SIGN_IN":
    case "SIGN_UP":
      const token = localStorage.getItem("token");
      if (token) {
        const user = jwtDecode(token);
        return {
          ...initialState,
          token: token,
          name: user.name,
          email: user.email,
          _id: user._id,
        };
      } else {
        return {
          token: "",
          name: "",
          email: "",
          _id: "",
        };
      }

    case "SIGN_OUT":
      console.log("this is running");
      localStorage.removeItem("token");
      return {
        token: "",
        name: "",
        email: "",
        _id: "",
      };

    default:
      return state;
  }
};

export default authReducer;
