import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './features/themeSlice';
import navigationReducer from './features/navigationSlice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    navigation: navigationReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
