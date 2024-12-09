import { Provider } from 'react-redux';

import HomeComponent from './Home';
import store from './src/store';
import { useEffect } from 'react';
import { OneSignal } from 'react-native-onesignal';
import Constants from 'expo-constants';

export default function App() {
  useEffect(() => {
    // Initialize OneSignal
    OneSignal.initialize('6a2b84a1-dff9-4b10-aa86-aa6d8d65148f');
    // OneSignal.initialize(Constants.expoConfig.extra.oneSignalAppId);
  }, []);
  return (
    <Provider store={store}>
      <HomeComponent />
    </Provider>
  );
}
