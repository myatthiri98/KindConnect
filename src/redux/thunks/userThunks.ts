import {createAsyncThunk} from '@reduxjs/toolkit';
import {
  fetchUserData,
  updateUserProfile as apiUpdateUserProfile,
} from '@services/userService';
import {
  fetchUserStart,
  fetchUserSuccess,
  fetchUserFailure,
  updateUserProfile,
  UserState,
} from '@redux/slices/userSlice';
import {AppDispatch} from '@redux/store';

// Thunk for fetching user data
export const fetchUser = createAsyncThunk<void, void, {dispatch: AppDispatch}>(
  'user/fetchUser',
  async (_, {dispatch}) => {
    try {
      dispatch(fetchUserStart());
      const userData = await fetchUserData();
      dispatch(fetchUserSuccess(userData));
    } catch (error) {
      dispatch(
        fetchUserFailure(
          error instanceof Error ? error.message : 'An unknown error occurred'
        )
      );
      throw error;
    }
  }
);

// Thunk for updating user profile
export const updateUser = createAsyncThunk<
  void,
  Partial<Omit<UserState, 'isLoading' | 'error' | 'stats' | 'badges'>>,
  {dispatch: AppDispatch}
>('user/updateUser', async (userData, {dispatch}) => {
  try {
    dispatch(fetchUserStart());
    const updatedData = await apiUpdateUserProfile(userData);
    dispatch(updateUserProfile(updatedData));
  } catch (error) {
    dispatch(
      fetchUserFailure(
        error instanceof Error ? error.message : 'An unknown error occurred'
      )
    );
    throw error;
  }
});
