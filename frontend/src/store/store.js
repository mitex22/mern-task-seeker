import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/authSlice';
import goalReducer from './goals/goalSlice';

const store = configureStore({
    reducer: {
        auth: authReducer,
        goals: goalReducer,
    },
});

export default store;