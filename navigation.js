import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import * as React from 'react'

import CustomDrawer from './components/CustomDrawer'
import HomeView from './views/HomeView'
import GameView from './views/GameView'
import SearchView from './views/SearchView'

const RootStack = createStackNavigator()
const Tab = createBottomTabNavigator()

function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeView} />
      <Tab.Screen name="Search" component={SearchView} />
    </Tab.Navigator>
  )
}

function RootNavigator() {
  return (
    <NavigationContainer>
      <RootStack.Navigator mode="modal">
        <RootStack.Screen
          name="Main"
          component={TabNavigator}
          options={{ headerShown: false }}
        />
        <RootStack.Screen name="GameModal" component={GameView} />
      </RootStack.Navigator>
    </NavigationContainer>
  )
}

export default RootNavigator
