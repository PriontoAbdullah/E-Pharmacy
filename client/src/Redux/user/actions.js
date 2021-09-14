import { createUserApi, loginUserApi } from "../../Api";
import { showNotification } from "../notification/actions";

export const CREATE_ACCOUNT = "CREATE_ACCOUNT";
export const Add_LOGIN_USER = "Add_LOGIN_USER";
export const LOGOUT = "LOGOUT";

export const createAccount = (formData, history) => async (dispatch) => {
  try {
    const { data } = await createUserApi(formData);
    dispatch({ type: Add_LOGIN_USER, payload: data });
    dispatch(
      showNotification({
        massageType: "success",
        message: "Account created successfully",
      })
    );
    // history.push("/");
  } catch (error) {
    dispatch(
      showNotification({
        message: error?.response?.data?.message,
        massageType: "error",
      })
    );
    console.log(error);
  }
};

export const loginAccount = (formData, history) => async (dispatch) => {
  try {
    const { data } = await loginUserApi(formData);
    console.log("🚀 ~ file: actions.js ~ line 34 ~ data", data);
    dispatch({ type: Add_LOGIN_USER, payload: data });
    dispatch(
      showNotification({
        massageType: "success",
        message: `welcome ${data.userInfo.name}`,
      })
    );
    // history.push("/");
  } catch (error) {
    dispatch(
      showNotification({
        message: error?.response?.data?.message,
        massageType: "error",
      })
    );
    console.log(error);
  }
};

export const logOut = () => async (dispatch) => {
  localStorage.setItem("profile", "null");
  dispatch(
    showNotification({
      message: "Log Out Successful",
      massageType: "success",
    })
  );
  dispatch({
    type: LOGOUT,
    payload: {
      token: null,
      userInfo: {
        id: "",
        name: "",
        email: "",
        isAdmin: false,
      },
    },
  });
};
