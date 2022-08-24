import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Footer, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Navi from './src/navi';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Navi/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
