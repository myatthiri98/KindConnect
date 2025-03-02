// import {useAppSelector} from '@redux/hooks';
import UserProfileScreen from '@screens/userProfileScreen';

function App() {
  // const colors = useAppSelector(state => state.colors);
  // const configs = useAppSelector(state => state.configs);

  // Remove console.log statements to fix warnings
  // console.log('colors:', colors);
  // console.log('configs:', configs);

  return <UserProfileScreen />;
}

export default App;
