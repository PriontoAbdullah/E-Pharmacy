export const SET_LOADING = "SET_LOADING";

export const setLoading = (loadingStatus) => {
  return { type: SET_LOADING, payload: loadingStatus };
};
