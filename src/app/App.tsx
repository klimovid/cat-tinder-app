import React from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import LoaderPage from '../lib/LoaderPage';
import appStore from './App.store';
import NavigationContainer from '../navigation/NavigationContainer';
import { observer } from 'mobx-react-lite';

function App(): React.JSX.Element {

  if (appStore.isLoading) {
    return <LoaderPage />;
  }

  return (
      <NavigationContainer />
  );
}

export default observer(App);
