import { Add_LOGIN_USER, LOGOUT } from "./actions";

const initialState = {
  token: null,
  userInfo: {
    id: "",
    name: "",
    email: "",
    isAdmin: false,
  },
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case Add_LOGIN_USER:
      localStorage.setItem("profile", JSON.stringify(action.payload));
      return { ...state, ...action.payload };

    case LOGOUT:
      localStorage.setItem("profile", JSON.stringify(null));
      return {
        ...action.payload,
        token: null,
      };
    default:
      const profile = JSON.parse(localStorage.getItem("profile")||'{}');
      return profile;
  }
}
