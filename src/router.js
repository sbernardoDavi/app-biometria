import React from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './pages/Home';
import Login from './pages/Login';
import Alunos from './pages/Alunos';

const Stack = createNativeStackNavigator();

function Routes() {
    return (
        <Stack.Navigator>
            <Stack.Screen 
            name="Login"
            component={Login}
            options={{ headerShown: false }}
            />
            <Stack.Screen 
            name="Home"
            component={Home}
            />
            <Stack.Screen 
            name="Alunos"
            component={Alunos}
            />
        </Stack.Navigator>
    )
}

export default Routes;