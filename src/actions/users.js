import * as api from "../api";

export const fetchAllUsers = () => async (dispatch) => {
  try {
    const { data } = await api.fetchAllUsers();
    dispatch({ type: "FETCH_USERS", payload: data });
    console.log('hello', data)
  } catch (error) {
    console.log(error);
  }
};


export const updateProfile = (id, updateData) => async (dispatch) => {
  try {
    console.log(updateData)

    const { data } = await api.updateProfile(id, updateData);
    console.log('HEllO', data)
    dispatch({ type: "UPDATE_CURRENT_USER", payload: data });
  } catch (error) {
    console.log(error);
  }
};