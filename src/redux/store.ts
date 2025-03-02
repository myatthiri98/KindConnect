import {configureStore} from '@reduxjs/toolkit';
import userSlice from '@redux/slices/userSlice';
import colorsSlice from '@redux/slices/colorsSlice';
import configSlice from '@redux/slices/configSlice';

export const store = configureStore({
  reducer: {
    colors: colorsSlice,
    configs: configSlice,
    user: userSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
