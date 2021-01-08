import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import Navigaton from './navigation';

const AppContainer = () => {
  return (
    <SafeAreaProvider>
        <NavigationContainer>
            <Navigaton />
        </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default AppContainer;
