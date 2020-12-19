import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import AppLoading from 'expo-app-loading';
import { useFonts, Montserrat_400Regular, Montserrat_500Medium } from '@expo-google-fonts/montserrat';

import Routes from './src/router';

export default function App() {

  state = { isReady: false };


  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_500Medium
  });

  if (!fontsLoaded)
    return <AppLoading />



  return (
    <>
      <StatusBar style="light" backgroundColor="#000" translucent={false} />
      <Routes />
    </>
  );
}