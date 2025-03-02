import {UserState} from '@redux/slices/userSlice';

// Mock API call - replace with actual API implementation
export const fetchUserData = async (): Promise<
  Omit<UserState, 'isLoading' | 'error'>
> =>
  // Simulate API delay
  new Promise(resolve => {
    setTimeout(() => {
      resolve({
        name: 'John Doe',
        avatar: 'https://i.pravatar.cc/150?img=8',
        location: 'New York, USA',
        bio: 'Passionate about helping others and making the world a better place.',
        stats: {
          actsCompleted: 15,
          peopleHelped: 23,
          kudosReceived: 45,
        },
        badges: [
          {id: '1', name: 'Super Helper', icon: '🌟'},
          {id: '2', name: 'Kind Soul', icon: '💖'},
          {id: '3', name: 'Community Hero', icon: '🦸‍♂️'},
        ],
      });
    }, 1000);
  });

// Update user profile - replace with actual API implementation
export const updateUserProfile = async (
  userData: Partial<UserState>
): Promise<Partial<UserState>> =>
  // Simulate API delay
  new Promise(resolve => {
    setTimeout(() => {
      resolve(userData);
    }, 1000);
  });
