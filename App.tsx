// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Contacts from './src/screens/Contacts';
import Details from './src/screens/Details';
import Dialer from './src/screens/Dialer';
import Add from './src/screens/Add';




const Stack = createNativeStackNavigator();

function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Contacts" component={Contacts} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="Dialer" component={Dialer} />
        <Stack.Screen name="Add" component={Add} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;