import { createSlice } from '@reduxjs/toolkit';

// const loginHistorySlice = createSlice({
//   name: 'loginHistory',
//   initialState: {
//     history: [],
//     loading: false,
//     error: null,
//   },
//   reducers: {
//     getLoginHistoryStart: (state) => {
//         state.loading = true;
//         console.log('State of Login History1', state)
//       state.error = null;
//     },
//     getLoginHistorySuccess: (state, action) => {
        
//         state.loading = false;
//         console.log('State of Login History2', action.payload)
//       state.history = action.payload;
//     },
//     getLoginHistoryFailure: (state, action) => {
//       state.loading = false;
//       console.log('State of Login History3', state)

//       state.error = action.payload;
//     },
//   },
// });

// export const {
//   getLoginHistoryStart,
//   getLoginHistorySuccess,
//   getLoginHistoryFailure,
// } = loginHistorySlice.actions;

// export default loginHistorySlice.reducer;







const initialState = {
    history: [],
    loading: false,
    error: null,
  };
  
  const loginHistorySlice = createSlice({
    name: 'loginHistory',
    initialState,
    reducers: {
      getLoginHistoryStart: (state) => {
        state.loading = true;
        console.log('State of Login History1', state);
        state.error = null;
      },
      getLoginHistorySuccess: (state, action) => {
        state.loading = false;
        console.log('State of Login History2', action.payload);
        state.history = action.payload;
      },
      getLoginHistoryFailure: (state, action) => {
        state.loading = false;
        console.log('State of Login History3', state);
        state.error = action.payload;
      },
    },
  });
  
  export const {
    getLoginHistoryStart,
    getLoginHistorySuccess,
    getLoginHistoryFailure,
  } = loginHistorySlice.actions;
  
  const loginHistoryReducer = loginHistorySlice.reducer;
  
  export default loginHistoryReducer;
  