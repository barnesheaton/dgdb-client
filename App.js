import 'react-native-gesture-handler'
import React from 'react'
// import {
//   createStackNavigator,
//   createAppContainer,
//   createDrawerNavigator,
//   createBottomTabNavigator
// } from 'react-navigation'

import ApolloClient from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'
import { onError } from 'apollo-link-error'
import { ApolloLink } from 'apollo-link'
import { ApolloProvider } from 'react-apollo'

// import CustomDrawer from './components/CustomDrawer'
// import HomeView from './views/HomeView'
// import GameView from './views/GameView'
// import SearchView from './views/SearchView'

import { API_URI } from 'react-native-dotenv'

import RootNavigator from './navigation'

// const tabNavigator = createBottomTabNavigator({
//   Trending: {
//     screen: HomeView
//   },
//   Search: {
//     screen: SearchView
//   }
// })

// const modalNavigator = createStackNavigator(
//   {
//     Tabs: { screen: tabNavigator },
//     GameModal: {
//       screen: GameView
//     }
//   },
//   {
//     initialRouteName: 'Tabs',
//     mode: 'modal',
//     headerMode: 'none'
//     // defaultNavigationOptions: {
//     //   headerStyle: {
//     //     backgroundColor: '#f4511e'
//     //   },
//     //   headerTitle: 'DGDB!',
//     //   headerTintColor: '#fff',
//     //   headerTitleStyle: {
//     //     fontWeight: 'bold'
//     //   }
//     // }
//   }
// )

// const rootNavigator = createDrawerNavigator(
//   {
//     Root: modalNavigator
//   },
//   {
//     initialRouteName: 'Root',
//     contentComponent: CustomDrawer
//   }
// )

// const AppContainer = createAppContainer(modalNavigator)

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
          uri: API_URI
        })
      ]),
      cache: new InMemoryCache()
    })

    return (
      <ApolloProvider client={client}>
        <RootNavigator />
      </ApolloProvider>
    )
  }
}
