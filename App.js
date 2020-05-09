import React from 'react'
import {
  createStackNavigator,
  createAppContainer,
  createDrawerNavigator
} from 'react-navigation'

import ApolloClient, { createNetworkInterface } from 'apollo-client'
import { ApolloProvider } from 'react-apollo'

import CustomDrawer from './components/CustomDrawer'
import HomeView from './views/HomeView'
import GameView from './views/GameView'
import WebViewModal from './views/WebViewModal'

const stackNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeView
    },
    Song: {
      screen: GameView
    }
  },
  {
    mode: 'card'
  }
)

const modalNavigator = createStackNavigator(
  {
    Stack: stackNavigator,
    WebViewModal: {
      screen: WebViewModal
    }
  },
  {
    initialRouteName: 'Stack',
    mode: 'modal',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e'
      },
      headerTitle: 'DGDB!',
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }
  }
)

const rootNavigator = createDrawerNavigator(
  {
    Root: modalNavigator
  },
  {
    initialRouteName: 'Root',
    contentComponent: CustomDrawer
  }
)

const AppContainer = createAppContainer(rootNavigator)

export default class App extends React.Component {
  render() {
    const networkInterface = createNetworkInterface({
      uri: 'http://localhost:8080/graphql'
    })
    const client = new ApolloClient({
      networkInterface
    })

    return (
      <ApolloProvider client={client}>
        <AppContainer />
      </ApolloProvider>
    )
  }
}
