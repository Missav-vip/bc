// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/Home';
import Wallet from './components/Wallet';
import Transactions from './components/Transactions';
import Settings from './components/Settings';
import Register from './components/Register';
import Login from './components/Login';
import SplashScreen from './components/SplashScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Wallet" component={Wallet} />
        <Stack.Screen name="Transactions" component={Transactions} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
