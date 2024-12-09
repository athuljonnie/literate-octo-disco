import { configureStore } from '@reduxjs/toolkit';
import darkModeReducer from './slices/darkModeSlice';

export const store = configureStore({
  reducer: {
    darkMode: darkModeReducer,
  },
});

export const makeStore = () => store;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
