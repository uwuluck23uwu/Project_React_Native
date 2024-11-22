import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home, RegisterAndLogin } from '../screens';
import { Header } from '../components';

const Stack = createNativeStackNavigator();

export default function AppAll() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'หน้าแรก' }}
        />
        <Stack.Screen
          name="RegisterAndLogin"
          component={RegisterAndLogin}
          options={{ title: 'สมัครสมาชิก && เข้าสู่ระบบ' }}
        />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
