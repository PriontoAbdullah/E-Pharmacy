import { SET_LOADING } from "./actions";

const initialState = {
  loading:false
};

export default function settingReducer(state = initialState, action) {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, loading: action.payload };

    default:
      return state;
  }
}
