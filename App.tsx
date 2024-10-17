// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Contacts from './src/screens/Contacts';
import Recent from './src/screens/Recent';
import Fav from './src/screens/Fav';
import Details from './src/screens/Details';
import Dialer from './src/screens/Dialer';




const Stack = createNativeStackNavigator();

function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Contacts" component={Contacts} />
        <Stack.Screen name="Recent" component={Recent} />
        <Stack.Screen name="Fav" component={Fav} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="Dialer" component={Dialer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;