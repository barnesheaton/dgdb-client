import React from 'react'
import {
  createStackNavigator,
  createAppContainer,
  createDrawerNavigator
} from 'react-navigation'

import ApolloClient from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'
import { onError } from 'apollo-link-error'
import { ApolloLink } from 'apollo-link'
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
    const client = new ApolloClient({
      link: ApolloLink.from([
        onError(({ graphQLErrors, networkError }) => {
          if (graphQLErrors)
            graphQLErrors.forEach(({ message, locations, path }) =>
              console.log(
                `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
              )
            )
          if (networkError) console.log(`[Network error]: ${networkError}`)
        }),
        new HttpLink({
          uri: 'https://w5xlvm3vzz.lp.gql.zone/graphql'
        })
      ]),
      cache: new InMemoryCache()
    })

    return (
      <ApolloProvider client={client}>
        <AppContainer />
      </ApolloProvider>
    )
  }
}
