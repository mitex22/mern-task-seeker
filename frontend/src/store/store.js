import { configureStore } from '@reduxjs/toolkit';

// Example: import your reducers here
// import tasksReducer from '../features/tasks/tasksSlice';

const store = configureStore({
    reducer: {
        // tasks: tasksReducer,
        // Add more reducers here
    },
    // Optional: Add middleware or devTools options if needed
});

export default store;