import * as api from '../api';  // Import your API functions
import {
  getLoginHistoryStart,
  getLoginHistorySuccess,
  getLoginHistoryFailure,
} from '../reducers/LoginHist';

export const fetchLoginHistory = () => async (dispatch) => {
  try {
    dispatch(getLoginHistoryStart());
    const { data } = await api.getLoginHistory();
    console.log('Login Hist Data', data)
    dispatch(getLoginHistorySuccess(data));
  } catch (error) {
    console.error('Login History Error:', error.message);  // Add this line
    dispatch(getLoginHistoryFailure(error.message));
  }
};
