import {createSlice, PayloadAction} from '@reduxjs/toolkit';

// Define types for user data
export interface Badge {
  id: string;
  name: string;
  icon: string;
}

export interface UserStats {
  actsCompleted: number;
  peopleHelped: number;
  kudosReceived: number;
}

export interface UserState {
  name: string;
  avatar: string;
  location: string;
  bio: string;
  stats: UserStats;
  badges: Badge[];
  isLoading: boolean;
  error: string | null;
}

// Initial state
const initialState: UserState = {
  name: '',
  avatar: '',
  location: '',
  bio: '',
  stats: {
    actsCompleted: 0,
    peopleHelped: 0,
    kudosReceived: 0,
  },
  badges: [],
  isLoading: false,
  error: null,
};

// Create the slice
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // Set loading state
    fetchUserStart: state => ({
      ...state,
      isLoading: true,
      error: null,
    }),
    // Set user data on successful fetch
    fetchUserSuccess: (
      state,
      action: PayloadAction<Omit<UserState, 'isLoading' | 'error'>>
    ) => {
      const userData = action.payload;
      return {
        ...state,
        name: userData.name,
        avatar: userData.avatar,
        location: userData.location,
        bio: userData.bio,
        stats: userData.stats,
        badges: userData.badges,
        isLoading: false,
      };
    },
    // Set error state
    fetchUserFailure: (state, action: PayloadAction<string>) => ({
      ...state,
      isLoading: false,
      error: action.payload,
    }),
    // Update user profile
    updateUserProfile: (
      state,
      action: PayloadAction<
        Partial<Omit<UserState, 'isLoading' | 'error' | 'stats' | 'badges'>>
      >
    ) => ({...state, ...action.payload}),
    // Update user stats
    updateUserStats: (state, action: PayloadAction<Partial<UserStats>>) => ({
      ...state,
      stats: {...state.stats, ...action.payload},
    }),
    // Add a badge
    addBadge: (state, action: PayloadAction<Badge>) => ({
      ...state,
      badges: [...state.badges, action.payload],
    }),
  },
});

// Export actions and reducer
export const {
  fetchUserStart,
  fetchUserSuccess,
  fetchUserFailure,
  updateUserProfile,
  updateUserStats,
  addBadge,
} = userSlice.actions;

export default userSlice.reducer;
