import * as React from 'react';
import { Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SignUp from './screens/LoginScreen/LoginScreen';
import Product from './screens/HomeScreen/HomeScreen';

function ProductScreen() {
  return (
    <Product />
  );
}

function AccountScreen() {
  return (
    <SignUp />
  );
}

const Tab = createBottomTabNavigator();

export default function Navi() {
  return (
    <NavigationContainer>
      <Tab.Navigator
      >
        <Tab.Screen   name="List" component={ProductScreen} options={{
         headerShown: false,
         tabBarIcon: ({focused}) => (
              <View style={{alignItems: 'center', justifyContent: 'center',}}>
                <Image 
                source={require('../assets/Image/List.png')}
                />
              </View>
          )
        }}  />
        <Tab.Screen  name="Account" component={AccountScreen} options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
              <View style={{alignItems: 'center', justifyContent: 'center',}}>
                <Image 
                source={require('../assets/Image/Account.png')}
                />
              </View>
          )
        }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
